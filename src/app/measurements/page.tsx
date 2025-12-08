"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function MeasurementsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [chest, setChest] = useState("");
  const [waist, setWaist] = useState("");
  const [sleeve, setSleeve] = useState("");
  const [error, setError] = useState("");

  if (!code) {
    // Simple guard: if no code in URL, send back home
    if (typeof window !== "undefined") {
      router.replace("/");
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !address || !chest || !waist || !sleeve) {
      setError("Please fill in all fields.");
      return;
    }

    const params = new URLSearchParams({
      code,
      name,
      email,
      address,
      chest,
      waist,
      sleeve,
    });

    router.push(`/checkout?${params.toString()}`);
  };

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
          Step 1 · Measurements
        </p>
        <h1 className="mt-3 text-2xl font-light tracking-tight text-neutral-50">
          Your made-to-measure profile.
        </h1>
        <p className="mt-2 text-sm text-neutral-400">
          Tell us how you like your shirt to sit. A specialist pattern is
          drafted from these details.
        </p>
        <p className="mt-1 text-[11px] text-neutral-500">
          Friend code in use: <span className="font-medium">{code}</span>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 rounded-lg border border-neutral-900 bg-neutral-950/40 p-6 md:grid-cols-2"
      >
        <div className="space-y-4 md:col-span-2">
          <FieldLabel label="Full name" />
          <TextInput value={name} onChange={setName} placeholder="Alex Tan" />
        </div>

        <div className="space-y-4">
          <FieldLabel label="Email" />
          <TextInput
            value={email}
            onChange={setEmail}
            type="email"
            placeholder="alex@example.com"
          />
        </div>

        <div className="space-y-4 md:col-span-2">
          <FieldLabel label="Delivery address" />
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="min-h-[80px] w-full border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
            placeholder="Unit, street, city, postal code"
          />
        </div>

        <div className="space-y-4">
          <FieldLabel label="Chest circumference (cm)" />
          <TextInput
            value={chest}
            onChange={setChest}
            type="number"
            placeholder="94"
          />
        </div>

        <div className="space-y-4">
          <FieldLabel label="Waist circumference (cm)" />
          <TextInput
            value={waist}
            onChange={setWaist}
            type="number"
            placeholder="78"
          />
        </div>

        <div className="space-y-4">
          <FieldLabel label="Sleeve length (cm)" />
          <TextInput
            value={sleeve}
            onChange={setSleeve}
            type="number"
            placeholder="62"
          />
        </div>

        {error && (
          <p className="md:col-span-2 text-xs text-red-400">{error}</p>
        )}

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="border border-neutral-200 bg-neutral-50 px-5 py-2 text-xs font-medium uppercase tracking-[0.22em] text-black transition hover:bg-white"
          >
            Review order
          </button>
        </div>
      </form>
    </div>
  );
}

function FieldLabel({ label }: { label: string }) {
  return (
    <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
      {label}
    </p>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
    />
  );
}
