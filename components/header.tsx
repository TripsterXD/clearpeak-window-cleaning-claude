"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact, navLinks } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "./icons";
import { ButtonLink, Container } from "./ui";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-mist bg-white">
      <Container className="flex h-18 items-center justify-between gap-4 lg:h-20">
        <Link href="/" onClick={close} className="shrink-0" aria-label="ClearPeak Window Cleaning home">
          <Image
            src="/logos/clearpeak-logo.svg"
            alt="ClearPeak Window Cleaning"
            width={700}
            height={200}
            preload
            className="h-12 w-auto lg:h-14"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-4 py-2 font-medium transition-colors ${
                      active ? "bg-mist text-navy" : "text-ink/75 hover:text-navy"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 font-semibold text-navy hover:text-teal-dark xl:text-base"
          >
            <PhoneIcon className="size-4" />
            <span className="hidden xl:inline">{contact.phone}</span>
            <span className="xl:hidden">Call</span>
          </a>
          <ButtonLink href="/contact">Get a Free Quote</ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-12 items-center justify-center rounded-full text-navy hover:bg-mist lg:hidden"
        >
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-18 bottom-0 overflow-y-auto border-t border-mist bg-white lg:hidden"
        >
          <Container className="py-6">
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {navLinks.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={close}
                        aria-current={active ? "page" : undefined}
                        className={`flex min-h-12 items-center rounded-xl px-4 text-lg font-semibold ${
                          active ? "bg-mist text-navy" : "text-ink hover:bg-offwhite"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-6 space-y-3 border-t border-mist pt-6">
              <ButtonLink href="/contact" onClick={close} className="w-full">
                Get a Free Quote
              </ButtonLink>
              <a
                href={contact.phoneHref}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-navy/15 font-semibold text-navy"
              >
                <PhoneIcon className="size-5" />
                {contact.phone}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
