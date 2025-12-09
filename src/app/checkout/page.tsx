"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

// Create a separate component that uses useSearchParams
function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const code = searchParams.get("code") || "";
  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const address = searchParams.get("address") || "";
  const chest = searchParams.get("chest") || "";
  const waist = searchParams.get("waist") || "";
  const sleeve = searchParams.get("sleeve") || "";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const handlePayNow = async () => {
    setError("");

    if (!code || !name || !email || !address || !chest || !waist || !sleeve) {
      setError("Missing details. Please go back and complete the form.");
      return;
    }

    setLoading(true);

    const { error: orderError } = await supabase.from("orders").insert({
      friend_code: code,
      name,
      email,
      address,
      chest,
      waist,
      sleeve,
    });

    if (orderError) {
      console.error(orderError);
      setLoading(false);
      setError("Could not place order. Please try again.");
      return;
    }

    const { error: usageError } = await supabase.rpc(
      "increment_friend_code_usage",
      { code_input: code }
    );

    if (usageError) {
      console.error(usageError);
    }

    setLoading(false);
    setDone(true);
  };

  return done ? (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-neutral-900 to-black">
      <div className="max-w-md w-full bg-neutral-950/40 p-6 rounded-lg border border-neutral-800">
        <h1 className="text-2xl font-bold text-white mb-4">Order placed!</h1>
        <p className="text-neutral-400 mb-6">
          Your shirt is being made. We&apos;ll ship it to you soon.
        </p>
        <button
          onClick={() => router.push("/")}
          className="w-full bg-white text-black px-4 py-2 rounded-md hover:bg-neutral-200 transition"
        >
          Back to home
        </button>
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-neutral-900 to-black">
      <div className="max-w-2xl w-full bg-neutral-950/40 p-8 rounded-lg border border-neutral-800">
        <h1 className="text-3xl font-bold text-white mb-6">Checkout</h1>

        <p className="mt-2 text-sm text-neutral-400">
          Your measurements are applied to our single quietly tailored shirt.
        </p>
        <p className="mt-1 text-[11px] text-neutral-500">
          Friend code: <span className="font-medium">{code}</span>
        </p>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <section className="space-y-4 rounded-lg border border-neutral-900 bg-neutral-950/40 p-6">
            <h2 className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              The shirt
            </h2>
            <div className="aspect-[4/5] w-full rounded-md border border-neutral-800 bg-gradient-to-b from-neutral-900 to-black" />
            <div className="flex items-center justify-between text-sm text-neutral-300">
              <span>Olop Quiet Shirt</span>
              <span className="text-neutral-100">SGD 320</span>
            </div>
            <p className="text-xs text-neutral-500">
              Long-staple cotton, soft structure, stitched in small batches.
            </p>
          </section>

          <section className="space-y-4 rounded-lg border border-neutral-900 bg-neutral-950/40 p-6 text-sm">
            <h2 className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              Your details
            </h2>
            <Detail label="Name" value={name} />
            <Detail label="Email" value={email} />
            <Detail label="Address" value={address} />
            <Detail label="Chest" value={chest} />
            <Detail label="Waist" value={waist} />
            <Detail label="Sleeve" value={sleeve} />
          </section>
        </div>

        <div className="mt-8 space-y-4">
          {error && (
            <p className="text-sm text-red-400 bg-red-950/30 p-3 rounded-md border border-red-900">
              {error}
            </p>
          )}
          <button
            onClick={() => router.push("/")}
            className="mt-1 w-full border border-neutral-700 px-4 py-2 text-xs uppercase tracking-[0.22em] text-neutral-200"
          >
            Back to home
          </button>
          ) : (
          <button
            onClick={handlePayNow}
            disabled={loading}
            className="mt-2 w-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Processing..." : "Pay now (test)"}
          </button>
          )
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
        {label}
      </p>
      <p className="text-sm text-neutral-200 whitespace-pre-wrap">{value}</p>
    </div>
  );
}

// Main export wrapped with Suspense
export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
