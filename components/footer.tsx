import Image from "next/image";
import Link from "next/link";
import { contact, navLinks, services } from "@/lib/site";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons";
import { ButtonLink, Container } from "./ui";

export function Footer() {
  return (
    <footer className="bg-navy text-white/75">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Link href="/" aria-label="ClearPeak Window Cleaning home" className="inline-block">
            <Image
              src="/logos/clearpeak-logo-white.svg"
              alt="ClearPeak Window Cleaning"
              width={700}
              height={200}
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-sm leading-relaxed">
            Residential and light commercial window cleaning for Calgary and surrounding
            communities.
          </p>
          <ButtonLink href="/contact" className="mt-6">
            Get a Free Quote
          </ButtonLink>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-base font-bold text-white">Company</h2>
          <ul className="mt-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-block py-1.5 hover:text-teal">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-base font-bold text-white">Services</h2>
          <ul className="mt-4 space-y-1">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-block py-1.5 hover:text-teal"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-base font-bold text-white">Contact</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <a href={contact.phoneHref} className="flex gap-3 hover:text-teal">
                <PhoneIcon className="mt-0.5 size-5 shrink-0 text-teal" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={contact.emailHref} className="flex gap-3 break-all hover:text-teal">
                <MailIcon className="mt-0.5 size-5 shrink-0 text-teal" />
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <ClockIcon className="mt-0.5 size-5 shrink-0 text-teal" />
              {contact.hours}
            </li>
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 size-5 shrink-0 text-teal" />
              {contact.serviceArea}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 text-sm text-white/60">
          © {new Date().getFullYear()} ClearPeak Window Cleaning. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
