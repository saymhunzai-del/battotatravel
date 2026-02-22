import { MongoClient, Db } from "mongodb";

let cached: Db | null = null;

export async function getDb(): Promise<Db | null> {
  const uri = process.env.MONGODB_URI;
  if (!uri || uri.includes("<db_password>")) return null;

  if (cached) return cached;

  try {
    const client = new MongoClient(uri);
    await client.connect();
    cached = client.db("binbatoota");
    return cached;
  } catch {
    return null;
  }
}
