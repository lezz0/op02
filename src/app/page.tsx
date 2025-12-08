// // // // "use client";

// // // // import { FormEvent, useState } from "react";
// // // // import { useRouter } from "next/navigation";
// // // // import { supabase } from "@/lib/supabaseClient";

// // // // export default function HomePage() {
// // // //   const router = useRouter();
// // // //   const [code, setCode] = useState("");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState("");

// // // //   const handleSubmit = async (e: FormEvent) => {
// // // //     e.preventDefault();
// // // //     setError("");
// // // //     const trimmed = code.trim();

// // // //     if (!trimmed) {
// // // //       setError("Please enter your friend code.");
// // // //       return;
// // // //     }

// // // //     setLoading(true);
// // // //     const { data, error: dbError } = await supabase
// // // //       .from("friend_codes")
// // // //       .select("id, active")
// // // //       .eq("code", trimmed)
// // // //       .maybeSingle();

// // // //     setLoading(false);

// // // //     if (dbError) {
// // // //       console.error(dbError);
// // // //       setError("Something went wrong. Please try again.");
// // // //       return;
// // // //     }

// // // //     if (!data || !data.active) {
// // // //       setError("This code is not valid.");
// // // //       return;
// // // //     }

// // // //     router.push(`/measurements?code=${encodeURIComponent(trimmed)}`);
// // // //   };

// // // //   return (
// // // //     <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
// // // //       <section className="space-y-8">
// // // //         <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
// // // //           Invitation only
// // // //         </p>
// // // //         <h1 className="text-3xl font-light tracking-tight text-neutral-50 sm:text-4xl">
// // // //           Made-to-measure shirting for the quietly confident.
// // // //         </h1>
// // // //         <p className="max-w-md text-sm text-neutral-400">
// // // //           Olop pieces are available by private referral. Enter the friend code
// // // //           you received to start your fitting experience.
// // // //         </p>

// // // //         <form onSubmit={handleSubmit} className="space-y-3 max-w-sm">
// // // //           <label className="block text-xs uppercase tracking-[0.22em] text-neutral-500">
// // // //             Friend code
// // // //           </label>
// // // //           <input
// // // //             type="text"
// // // //             value={code}
// // // //             onChange={(e) => setCode(e.target.value)}
// // // //             placeholder="e.g. Alex20"
// // // //             className="w-full border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
// // // //           />
// // // //           {error && <p className="text-xs text-red-400">{error}</p>}
// // // //           <button
// // // //             type="submit"
// // // //             disabled={loading}
// // // //             className="mt-1 w-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
// // // //           >
// // // //             {loading ? "Checking..." : "Continue"}
// // // //           </button>
// // // //         </form>

// // // //         <p className="text-[11px] text-neutral-500">
// // // //           No code yet? Olop is currently available only by invitation from
// // // //           existing clients.
// // // //         </p>
// // // //       </section>

// // // //       {/* <section className="space-y-4 border border-neutral-900 bg-neutral-950/40 p-5">
// // // //         <div className="aspect-[4/5] w-full rounded-md border border-neutral-800 bg-gradient-to-b from-neutral-900 to-black" />
// // // //         <div className="space-y-1">
// // // //           <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
// // // //             The shirt
// // // //           </p>
// // // //           <p className="text-sm text-neutral-300">
// // // //             One quietly perfect shirt. Long-staple cotton, soft structure,
// // // //             hand-finished cuffs.
// // // //           </p>
// // // //         </div>
// // // //       </section> */}
// // // //     </div>
// // // //   );
// // // // }




// // // // "use client";

// // // // import { supabase } from "@/lib/supabaseClient";

// // // // import { FormEvent, useState } from "react";
// // // // import { useRouter } from "next/navigation";

// // // // export default function HomePage() {
// // // //   const router = useRouter();
// // // //   const [code, setCode] = useState("");
// // // //   const [error, setError] = useState("");
// // // //   const [loading, setLoading] = useState(false);

  
// // // // const handleSubmit = async (e: FormEvent) => {
// // // //   e.preventDefault();
// // // //   setError("");
// // // //   setLoading(true);

// // // //   // Supabase check...

// // // //   setLoading(false);
// // // // };

// // // // // const handleSubmit = async (e: FormEvent) => {
// // // // //   e.preventDefault();
// // // // //   const trimmed = code.trim();

// // // //   // if (!trimmed) {
// // // //   //   setError("Please enter your referral code.");
// // // //   //   return;
// // // //   // }

// // // //   // Check code in Supabase
// // // //   const { data, error: dbError } = await supabase
// // // //     .from("referral_codes")
// // // //     .select("id")
// // // //     .eq("code", trimmed)
// // // //     .maybeSingle(); // zero or one row [web:92][web:123]

// // // //   if (dbError) {
// // // //     console.error(dbError);
// // // //     setError("Something went wrong. Please try again.");
// // // //     return;
// // // //   }

// // // //   if (!data) {
// // // //     setError("This referral code is not valid.");
// // // //     return;
// // // //   }

// // // //   // Valid code: go to measurements
// // // //   router.push(`/measurements?ref=${encodeURIComponent(trimmed)}`);
// // // // };


// // // //   return (
// // // //     <main className="min-h-screen bg-neutral-950 text-neutral-50 flex items-center justify-center px-6">
// // // //       <div className="max-w-xl w-full space-y-10">
// // // //         <div className="space-y-3">
// // // //           <p className="tracking-[0.35em] text-xs uppercase text-neutral-500">
// // // //             OLOP
// // // //           </p>
// // // //           <h1 className="text-3xl md:text-4xl font-light">
// // // //             Tailored to one. <span className="font-normal">Made for you.</span>
// // // //           </h1>
// // // //           <p className="text-sm text-neutral-400 max-w-md">
// // // //             Enter your private referral code to access your made‑to‑measure shirt.
// // // //           </p>
// // // //         </div>

// // // //         <form onSubmit={handleSubmit} className="space-y-3 max-w-sm">
// // // //   <label className="block text-xs uppercase tracking-[0.22em] text-neutral-500">
// // // //     Friend code
// // // //   </label>
// // // //   <input
// // // //     type="text"
// // // //     value={code}
// // // //     onChange={(e) => setCode(e.target.value)}
// // // //     placeholder="e.g. Alex20"
// // // //     className="w-full border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
// // // //   />
// // // //   {error && <p className="text-xs text-red-400">{error}</p>}
// // // //   <button
// // // //     type="submit"
// // // //     disabled={loading}
// // // //     className="mt-1 w-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
// // // //   >
// // // //     {loading ? "Checking..." : "Continue"}
// // // //   </button>
// // // // </form>

        

// // // //         <p className="text-[11px] text-neutral-500">
// // // //           Invited guests only. One garment, made to your exact proportions.
// // // //         </p>
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }


// // // // "use client";

// // // // import { FormEvent, useState } from "react";
// // // // import { useRouter } from "next/navigation";
// // // // import { supabase } from "@/lib/supabaseClient";

// // // // export default function HomePage() {
// // // //   const router = useRouter();
// // // //   const [code, setCode] = useState("");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState("");

// // // //   const handleSubmit = async (e: FormEvent) => {
// // // //     e.preventDefault();
// // // //     setError("");

// // // //     const trimmed = code.trim();

// // // //     if (!trimmed) {
// // // //       setError("Please enter your friend code.");
// // // //       return;
// // // //     }

// // // //     setLoading(true);

// // // //     const { data, error: dbError } = await supabase
// // // //       .from("friend_codes")
// // // //       .select("id, active")
// // // //       .eq("code", trimmed)
// // // //       .maybeSingle();

// // // //     setLoading(false);

// // // //     if (dbError) {
// // // //       console.error(dbError);
// // // //       setError("Something went wrong. Please try again.");
// // // //       return;
// // // //     }

// // // //     if (!data || !data.active) {
// // // //       setError("This code is not valid.");
// // // //       return;
// // // //     }

// // // //     router.push(`/measurements?code=${encodeURIComponent(trimmed)}`);
// // // //   };

// // // //   return (
// // // //     <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
// // // //       {/* LEFT – hero, same feel as Olop 1 */}
// // // //       <section className="space-y-8">
// // // //         <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
// // // //           Invitation only
// // // //         </p>
// // // //         <h1 className="text-3xl font-light tracking-tight text-neutral-50 sm:text-4xl">
// // // //           Tailored to one. Made for you.
// // // //         </h1>
// // // //         <p className="max-w-md text-sm text-neutral-400">
// // // //           Enter your private friend code to access your made-to-measure shirt
// // // //           experience. One garment, cut to your exact proportions.
// // // //         </p>

// // // //         {/* FRIEND CODE FORM – new logic */}
// // // //         <form onSubmit={handleSubmit} className="space-y-3 max-w-sm">
// // // //           <label className="block text-xs uppercase tracking-[0.22em] text-neutral-500">
// // // //             Friend code
// // // //           </label>
// // // //           <input
// // // //             type="text"
// // // //             value={code}
// // // //             onChange={(e) => setCode(e.target.value)}
// // // //             placeholder="e.g. Alex20"
// // // //             className="w-full border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
// // // //           />
// // // //           {error && <p className="text-xs text-red-400">{error}</p>}
// // // //           <button
// // // //             type="submit"
// // // //             disabled={loading}
// // // //             className="mt-1 w-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
// // // //           >
// // // //             {loading ? "Checking..." : "Enter"}
// // // //           </button>
// // // //         </form>

// // // //         <p className="text-[11px] text-neutral-500">
// // // //           Invited guests only. One garment, made to your exact proportions.
// // // //         </p>
// // // //       </section>

// // // //       {/* RIGHT – product preview column like Olop 1 */}
// // // //       <section className="space-y-4 border border-neutral-900 bg-neutral-950/40 p-5">
// // // //         <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
// // // //           Quiet luxury shirt
// // // //         </p>
// // // //         <h2 className="text-sm text-neutral-200">
// // // //           A single, quietly precise shirt in long-staple cotton. Soft
// // // //           structure, subtle sheen, hand-finished cuffs.
// // // //         </h2>
// // // //         <div className="mt-4 aspect-[4/5] w-full rounded-md border border-neutral-800 bg-gradient-to-b from-neutral-900 to-black" />
// // // //         <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
// // // //           <span>Olop Quiet Shirt</span>
// // // //           <span className="text-neutral-100">SGD 320</span>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }




// // // "use client";

// // // import { FormEvent, useState } from "react";
// // // import { useRouter } from "next/navigation";
// // // import { supabase } from "@/lib/supabaseClient";

// // // export default function HomePage() {
// // //   const router = useRouter();
// // //   const [code, setCode] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState("");

// // //   const handleSubmit = async (e: FormEvent) => {
// // //     e.preventDefault();
// // //     setError("");

// // //     const trimmed = code.trim();

// // //     if (!trimmed) {
// // //       setError("Please enter your friend code.");
// // //       return;
// // //     }

// // //     setLoading(true);

// // //     const { data, error: dbError } = await supabase
// // //       .from("friend_codes")
// // //       .select("id, active")
// // //       .eq("code", trimmed)
// // //       .maybeSingle();

// // //     setLoading(false);

// // //     if (dbError) {
// // //       console.error(dbError);
// // //       setError("Something went wrong. Please try again.");
// // //       return;
// // //     }

// // //     if (!data || !data.active) {
// // //       setError("This code is not valid.");
// // //       return;
// // //     }

// // //     router.push(`/measurements?code=${encodeURIComponent(trimmed)}`);
// // //   };

// // //   return (
// // //     <div className="max-w-2xl space-y-8">
// // //       <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
// // //         Invitation only
// // //       </p>
// // //       <h1 className="text-3xl font-light tracking-tight text-neutral-50 sm:text-4xl">
// // //         Tailored to one. Made for you.
// // //       </h1>
// // //       <p className="max-w-md text-sm text-neutral-400">
// // //         Enter your private friend code to access your made-to-measure shirt
// // //         experience. One garment, cut to your exact proportions.
// // //       </p>

// // //       <form onSubmit={handleSubmit} className="space-y-3 max-w-sm">
// // //         <label className="block text-xs uppercase tracking-[0.22em] text-neutral-500">
// // //           Friend code
// // //         </label>
// // //         <input
// // //           type="text"
// // //           value={code}
// // //           onChange={(e) => setCode(e.target.value)}
// // //           placeholder="e.g. Alex20"
// // //           className="w-full border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
// // //         />
// // //         {error && <p className="text-xs text-red-400">{error}</p>}
// // //         <button
// // //           type="submit"
// // //           disabled={loading}
// // //           className="mt-1 w-36 border border-neutral-200 bg-transparent px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-neutral-50 transition hover:bg-neutral-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70"
// // //         >
// // //           {loading ? "Checking..." : "Enter"}
// // //         </button>
// // //       </form>

// // //       <p className="text-[11px] text-neutral-500">
// // //         Invited guests only. One garment, made to your exact proportions.
// // //       </p>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { FormEvent, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { supabase } from "@/lib/supabaseClient";

// // export default function HomePage() {
// //   const router = useRouter();
// //   const [code, setCode] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleSubmit = async (e: FormEvent) => {
// //     e.preventDefault();
// //     setError("");

// //     const trimmed = code.trim();

// //     if (!trimmed) {
// //       setError("Please enter your friend code.");
// //       return;
// //     }

// //     setLoading(true);

// //     const { data, error: dbError } = await supabase
// //       .from("friend_codes")
// //       .select("id, active")
// //       .eq("code", trimmed)
// //       .maybeSingle();

// //     setLoading(false);

// //     if (dbError) {
// //       console.error(dbError);
// //       setError("Something went wrong. Please try again.");
// //       return;
// //     }

// //     if (!data || !data.active) {
// //       setError("This code is not valid.");
// //       return;
// //     }

// //     router.push(`/measurements?code=${encodeURIComponent(trimmed)}`);
// //   };

// //   return (
// //     <div className="flex min-h-[calc(100vh-6rem)] items-center justify-center">
// //       <div className="w-full max-w-2xl space-y-8">
// //         <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
// //           Invitation only
// //         </p>
// //         <h1 className="text-3xl font-light tracking-tight text-neutral-50 sm:text-4xl">
// //           Tailored to one. Made for you.
// //         </h1>
// //         <p className="max-w-md text-sm text-neutral-400">
// //           Enter your private friend code to access your made-to-measure shirt
// //           experience. One garment, cut to your exact proportions.
// //         </p>

// //         <form onSubmit={handleSubmit} className="space-y-2 max-w-xl">
// //           <label className="block text-xs uppercase tracking-[0.22em] text-neutral-500">
// //             Friend code
// //           </label>
// //           <div className="flex items-center gap-2">
// //             <input
// //               type="text"
// //               value={code}
// //               onChange={(e) => setCode(e.target.value)}
// //               placeholder="e.g. Alex20"
// //               className="flex-1 border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-neutral-500"
// //             />
// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className="border border-neutral-200 bg-transparent px-5 py-2 text-xs font-medium uppercase tracking-[0.22em] text-neutral-50 transition hover:bg-neutral-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70"
// //             >
// //               {loading ? "Checking..." : "Enter"}
// //             </button>
// //           </div>
// //           {error && <p className="text-xs text-red-400">{error}</p>}
// //         </form>

// //         <p className="text-[11px] text-neutral-500">
// //           Invited guests only. One garment, made to your exact proportions.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/lib/supabaseClient";

// export default function HomePage() {
//   const router = useRouter();
//   const [code, setCode] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setError("");

//     const trimmed = code.trim();

//     if (!trimmed) {
//       setError("Please enter your friend code.");
//       return;
//     }

//     setLoading(true);

//     const { data, error: dbError } = await supabase
//       .from("friend_codes")
//       .select("id, active")
//       .eq("code", trimmed)
//       .maybeSingle();

//     setLoading(false);

//     if (dbError) {
//       console.error(dbError);
//       setError("Something went wrong. Please try again.");
//       return;
//     }

//     if (!data || !data.active) {
//       setError("This code is not valid.");
//       return;
//     }

//     router.push(`/measurements?code=${encodeURIComponent(trimmed)}`);
//   };

// return (
//   <div className="flex min-h-[calc(100vh-6rem)] w-full items-center justify-center bg-gradient-to-br from-black via-neutral-950 to-[#111827]">
//       <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
//         Invitation only
//       </p>
//       <h1 className="mt-3 text-3xl font-light tracking-tight text-neutral-50 sm:text-[2.2rem]">
//         Tailored to one. Made for you.
//       </h1>
//       <p className="mt-3 text-sm text-neutral-400">
//         Enter your private code to access your made-to-measure shirt
//         experience.
//       </p>

//       <form onSubmit={handleSubmit} className="mt-8 space-y-2">
//         <label className="block text-xs uppercase tracking-[0.22em] text-neutral-500">
//           Friend code
//         </label>
//         <div className="flex items-center gap-3">
//           <input
//             type="text"
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             placeholder="e.g. Alex20"
//             className="w-56 border border-neutral-800 bg-neutral-900/80 px-3 py-3 text-sm text-neutral-100 outline-none transition focus:border-neutral-400"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="h-[46px] border border-neutral-300 bg-transparent px-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-50 transition hover:bg-neutral-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70"
//           >
//             {loading ? "Checking..." : "Enter"}
//           </button>
//         </div>
//         {error && <p className="text-xs text-red-400">{error}</p>}
//       </form>

//       <p className="mt-6 text-[11px] text-neutral-500">
//         Invited guests only. One garment, made to your exact proportions.
//       </p>
//     </div>
 
// );
// }


"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function HomePage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmed = code.trim();
    if (!trimmed) {
      setError("Please enter your friend code.");
      return;
    }

    setLoading(true);
    const { data, error: dbError } = await supabase
      .from("friend_codes")
      .select("id, active")
      .eq("code", trimmed)
      .maybeSingle();
    setLoading(false);

    if (dbError) {
      console.error(dbError);
      setError("Something went wrong. Please try again.");
      return;
    }
    if (!data || !data.active) {
      setError("This code is not valid.");
      return;
    }

    router.push(`/measurements?code=${encodeURIComponent(trimmed)}`);
  };

  return (
  <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
    <div className="w-full max-w-xl rounded-2xl border border-neutral-900 bg-black/80 px-8 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.9)] backdrop-blur-sm">
        <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
          Invitation only
        </p>
        <h1 className="mt-3 text-3xl font-light tracking-tight text-neutral-50 sm:text-[2.2rem]">
          Tailored to one. Made for you.
        </h1>
        <p className="mt-3 text-sm text-neutral-400">
          Enter your private code to access your made-to-measure shirt
          experience.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-2">
          <label className="block text-xs uppercase tracking-[0.22em] text-neutral-500">
            Friend code
          </label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="e.g. Alex20"
              className="w-56 border border-neutral-800 bg-neutral-900/80 px-3 py-3 text-sm text-neutral-100 outline-none transition focus:border-neutral-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="h-[46px] border border-neutral-300 bg-transparent px-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-50 transition hover:bg-neutral-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Checking..." : "Enter"}
            </button>
          </div>
          {error && <p className="text-xs text-red-400">{error}</p>}
        </form>

        <p className="mt-6 text-[11px] text-neutral-500">
          Invited guests only. One garment, made to your exact proportions.
        </p>
      </div>
    </div>
  );
}
