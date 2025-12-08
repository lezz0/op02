// import type { Metadata } from "next";
// import "./globals.css";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Olop – Quiet Luxury",
//   description: "Quiet luxury made-to-measure shirt experience.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-transparent text-neutral-100">
//         <div className="flex min-h-screen flex-col">
//           <header className="flex items-center justify-between border-b border-neutral-900 px-4 py-4 sm:px-6 lg:px-8">
//             <Link href="/" className="text-xs tracking-[0.35em] uppercase">
//               OLOP
//             </Link>
//             <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
//               Quiet Luxury Shirt
//             </span>
//           </header>
//           <main className="flex-1">
//             {children}
//           </main>
//           <footer className="border-t border-neutral-900 px-4 py-4 text-xs text-neutral-500 sm:px-6 lg:px-8">
//             <p>© {new Date().getFullYear()} Olop Studio. All rights reserved.</p>
//           </footer>
//         </div>
//       </body>
//     </html>
//   );
// }


// import type { Metadata } from "next";
// import "./globals.css";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Olop – Quiet Luxury",
//   description: "Quiet luxury made-to-measure shirt experience.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-black text-neutral-100">
//         <header className="flex items-center justify-between border-b border-neutral-900 px-4 py-4 sm:px-6 lg:px-8">
//           <Link href="/" className="text-xs tracking-[0.35em] uppercase">
//             OLOP
//           </Link>
//           <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
//             Quiet Luxury Shirt
//           </span>
//         </header>
//         <main className="min-h-[calc(100vh-5rem)] px-4 py-8 sm:px-6 lg:px-8">
//           {children}
//         </main>
//         <footer className="border-t border-neutral-900 px-4 py-4 text-xs text-neutral-500 sm:px-6 lg:px-8">
//           <p>© {new Date().getFullYear()} Olop Studio. All rights reserved.</p>
//         </footer>
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Olop – Quiet Luxury",
  description: "Quiet luxury made-to-measure shirt experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-transparent text-neutral-100">
        <div className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-slate-950">
          <header className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-xs tracking-[0.35em] uppercase">
              OLOP
            </Link>
            <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              {/* Quiet Luxury Shirt */}
            </span>
          </header>
          <main className="min-h-[calc(100vh-5rem)] px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </main>
          <footer className="px-4 py-4 text-xs text-neutral-500 sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} Olop Studio. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
