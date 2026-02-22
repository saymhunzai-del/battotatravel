import { readFile, writeFile } from "fs/promises";
import path from "path";
import { getDb } from "./mongodb";

export interface PackageItem {
  href: string;
  title: string;
  description: string;
  rate: string;
  rateNote: string;
  imageSrc: string;
  imageAlt: string;
  badge: string;
}

const DEFAULT_PACKAGES: PackageItem[] = [
  {
    href: "/holiday-package",
    title: "Dubai City Break",
    description:
      "3 nights in a 4-star hotel with breakfast. Ideal for a short getaway with optional desert safari.",
    rate: "From AED 1,299",
    rateNote: "per person",
    imageSrc: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    imageAlt: "Dubai skyline",
    badge: "Popular",
  },
  {
    href: "/holiday-package",
    title: "Maldives Beach Escape",
    description:
      "5 nights in a beach resort with half board. Flights and transfers can be arranged.",
    rate: "From AED 4,499",
    rateNote: "per person",
    imageSrc: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    imageAlt: "Maldives overwater bungalow",
    badge: "Best value",
  },
  {
    href: "/holiday-package",
    title: "Oman Adventure",
    description:
      "4 nights combining Muscat and desert. Discover heritage, wadis and warm hospitality.",
    rate: "From AED 2,199",
    rateNote: "per person",
    imageSrc: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&q=80",
    imageAlt: "Oman desert and mountains",
    badge: "",
  },
  {
    href: "/holiday-package",
    title: "Egypt Highlights",
    description:
      "5 nights Cairo & Nile. Pyramids, museums and optional cruise extension.",
    rate: "From AED 2,899",
    rateNote: "per person",
    imageSrc: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80",
    imageAlt: "Pyramids of Giza",
    badge: "Culture",
  },
];

const FILE_PATH = path.join(process.cwd(), "data", "packages.json");
const COLLECTION = "packages";

export async function getPackages(): Promise<PackageItem[]> {
  const db = await getDb();
  if (db) {
    try {
      const docs = await db.collection(COLLECTION).find({}).sort({ _id: 1 }).toArray();
      if (docs.length > 0) {
        return docs.map(({ _id, ...p }) => p as PackageItem);
      }
    } catch {
      /* fallback to file/default */
    }
  }

  try {
    const raw = await readFile(FILE_PATH, "utf-8");
    const data = JSON.parse(raw);
    return Array.isArray(data) && data.length > 0 ? data : DEFAULT_PACKAGES;
  } catch {
    return DEFAULT_PACKAGES;
  }
}

export async function savePackages(packages: PackageItem[]): Promise<void> {
  const db = await getDb();
  if (db) {
    await db.collection(COLLECTION).deleteMany({});
    if (packages.length > 0) {
      await db.collection(COLLECTION).insertMany(packages);
    }
    return;
  }

  const dir = path.dirname(FILE_PATH);
  const { mkdir } = await import("fs/promises");
  await mkdir(dir, { recursive: true });
  await writeFile(FILE_PATH, JSON.stringify(packages, null, 2), "utf-8");
}
