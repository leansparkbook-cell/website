"use client";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black w-full py-12 flex items-center justify-center">
      {/* Section texture — grid on dark */}
      <div className="tx tx-grid-dark" aria-hidden="true" />

      <p className="relative z-10 text-center uppercase text-white tracking-[0.25em] text-[0.6875rem] font-normal">
        Copyright © Prabhu, Narayan, and Sud 2025.
      </p>
    </footer>
  );
}
