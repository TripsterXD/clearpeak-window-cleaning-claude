import type { Metadata } from "next";
import Image from "next/image";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { QuoteForm } from "@/components/quote-form";
import { Container, PageHero } from "@/components/ui";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us for a Free Quote",
  description:
    "Request a free window cleaning quote from ClearPeak. Serving Calgary and surrounding communities. Call (403) 555-0148 or send us your project details.",
};

const details = [
  { icon: PhoneIcon, label: "Phone", value: contact.phone, href: contact.phoneHref },
  { icon: MailIcon, label: "Email", value: contact.email, href: contact.emailHref },
  { icon: ClockIcon, label: "Hours", value: contact.hours },
  { icon: MapPinIcon, label: "Service Area", value: contact.serviceArea },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request Your Free Window Cleaning Quote"
        intro="Tell us about your property and the services you’re interested in. We’ll follow up with a clear, no-obligation quote."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 rounded-3xl border border-mist bg-white p-6 shadow-lift sm:p-10 lg:col-span-7 lg:order-last">
            <h2 className="text-2xl font-bold sm:text-3xl">Get a Free Quote</h2>
            <p className="mt-2 mb-8 text-ink/75">
              Fill out the form below and we’ll be in touch.
            </p>
            <QuoteForm />
          </div>

          <div className="min-w-0 space-y-6 lg:col-span-5">
            <div className="rounded-3xl bg-navy p-6 text-white shadow-soft sm:p-8">
              <h2 className="text-2xl font-bold text-white">Contact Information</h2>
              <p className="mt-2 text-white/75">Prefer to talk? Give us a call or send an email.</p>
              <ul className="mt-8 space-y-6">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-teal text-navy">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold tracking-wide text-teal uppercase">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-1 block text-lg font-semibold break-words text-white hover:text-teal"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-lg text-white/90">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl shadow-soft sm:block">
              <Image
                src="/images/residential-window-cleaning.jpg"
                alt="Window cleaner wiping the inside of a residential window"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
