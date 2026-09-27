import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteCta } from "@/components/quote-cta";
import { ServiceIcon } from "@/components/service-icon";
import { ButtonLink, CheckList, Container, PageHero } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Window Cleaning Services Calgary | ClearPeak",
  description:
    "Explore residential, commercial, interior and exterior window cleaning services from ClearPeak Window Cleaning in Calgary.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Window Cleaning Services for Calgary Homes and Businesses"
        intro="From family homes to storefronts, ClearPeak offers flexible window cleaning services that can be combined to suit your property, your schedule and the level of clean you’re after."
      />

      <nav aria-label="Services on this page" className="border-b border-mist bg-white">
        <Container>
          <ul className="flex gap-2 overflow-x-auto py-4">
            {services.map((service) => (
              <li key={service.id} className="shrink-0">
                <Link
                  href={`#${service.id}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-mist bg-offwhite px-4 text-sm font-semibold text-navy hover:border-teal"
                >
                  <ServiceIcon name={service.icon} className="size-4 text-teal-dark" />
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <div className="py-8 sm:py-12">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-title`}
            className="scroll-mt-24 py-10 sm:py-14"
          >
            <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft ${
                  index % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-teal">
                  <ServiceIcon name={service.icon} className="size-6" />
                </span>
                <h2 id={`${service.id}-title`} className="mt-5 text-3xl leading-tight font-bold sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed font-medium text-navy">
                  {service.summary}
                </p>
                <p className="mt-4 leading-relaxed text-ink/75">{service.description}</p>

                <h3 className="mt-8 text-lg font-bold">What’s included</h3>
                <div className="mt-4">
                  <CheckList items={service.includes} />
                </div>

                <p className="mt-6 rounded-2xl bg-white p-5 text-ink/80 shadow-soft">
                  <span className="font-semibold text-navy">A great fit for: </span>
                  {service.idealFor}
                </p>

                <ButtonLink href="/contact" withArrow className="mt-8">
                  Get a Free Quote
                </ButtonLink>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <QuoteCta
        title="Not Sure Which Service You Need?"
        text="Tell us about your property and what you’d like cleaned. We’ll recommend the right combination of services and send you a free quote."
      />
    </>
  );
}
