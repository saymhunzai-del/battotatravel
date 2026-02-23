"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type PackageItem = {
  href: string;
  title: string;
  description: string;
  rate: string;
  rateNote: string;
  imageSrc: string;
  imageAlt: string;
  badge: string;
};

export default function AdminPackagesPage() {
  const router = useRouter();
  const [packages, setPackages] = useState<PackageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/auth/session")
      .then((r) => r.json())
      .then((d) => {
        if (!d.ok) router.replace("/admin");
        else fetch("/api/packages").then((r) => r.json()).then(setPackages).finally(() => setLoading(false));
      })
      .catch(() => router.replace("/admin"));
  }, [router]);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/admin");
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/packages", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(packages),
      });
      if (res.ok) setMessage("Packages saved.");
      else setMessage("Failed to save.");
    } catch {
      setMessage("Failed to save.");
    } finally {
      setSaving(false);
    }
  }

  function update(i: number, field: keyof PackageItem, value: string) {
    setPackages((prev) => {
      const next = [...prev];
      next[i] = { ...next[i], [field]: value };
      return next;
    });
  }

  if (loading) return <div className="admin-page">Loading...</div>;

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Edit Packages</h1>
        <div className="admin-actions">
          <Link href="/">View site</Link>
          <button type="button" onClick={handleLogout} className="admin-logout">
            Logout
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="admin-form">
        {packages.map((pkg, i) => (
          <div key={i} className="admin-card">
            <h3>Package {i + 1}</h3>
            <label>Title <input value={pkg.title} onChange={(e) => update(i, "title", e.target.value)} required /></label>
            <label>Description <textarea value={pkg.description} onChange={(e) => update(i, "description", e.target.value)} required rows={2} /></label>
            <label>Rate <input value={pkg.rate} onChange={(e) => update(i, "rate", e.target.value)} /></label>
            <label>Rate note <input value={pkg.rateNote} onChange={(e) => update(i, "rateNote", e.target.value)} /></label>
            <label>Image URL <input value={pkg.imageSrc} onChange={(e) => update(i, "imageSrc", e.target.value)} required /></label>
            <label>Image alt <input value={pkg.imageAlt} onChange={(e) => update(i, "imageAlt", e.target.value)} /></label>
            <label>Badge (optional) <input value={pkg.badge} onChange={(e) => update(i, "badge", e.target.value)} placeholder="e.g. Popular" /></label>
          </div>
        ))}
        {message && <p className="admin-message">{message}</p>}
        <button type="submit" disabled={saving}>{saving ? "Saving..." : "Save packages"}</button>
      </form>
    </div>
  );
}
