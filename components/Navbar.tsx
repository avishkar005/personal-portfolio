"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-4 z-50 mx-auto flex w-full max-w-2xl justify-center px-4">
      <header className="flex w-full items-center justify-between rounded-full border border-black/5 bg-paper/95 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 rounded-full py-1 pl-1 pr-3 text-sm font-semibold text-text-primary"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-xs font-bold text-paper">
            AC
          </span>
          Avishkar Choundkar
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 ${
                  active
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-opacity duration-200 hover:opacity-85 md:inline-flex"
        >
          Contact
        </Link>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-text-primary transition-transform duration-200 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-4 bg-text-primary transition-transform duration-200 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </header>

      {open && (
        <div className="absolute left-4 right-4 top-16 rounded-2xl border border-black/5 bg-paper p-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm ${
                  pathname === link.href
                    ? "text-text-primary"
                    : "text-text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink px-4 py-2 text-center text-sm font-medium text-paper"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}