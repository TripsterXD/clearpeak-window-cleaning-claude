import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  ClipboardIcon,
  MapPinIcon,
  MessageIcon,
  ShieldIcon,
  SparkleIcon,
} from "@/components/icons";
import { QuoteCta } from "@/components/quote-cta";
import { ServiceIcon } from "@/components/service-icon";
import { ButtonLink, CheckList, Container, SectionHeading } from "@/components/ui";
import { contact, services } from "@/lib/site";

const reasons = [
  {
    icon: ShieldIcon,
    title: "Careful, detailed work",
    text: "We treat every property with respect, protecting floors and furnishings and taking the time to get corners and edges right.",
  },
  {
    icon: CalendarIcon,
    title: "Dependable scheduling",
    text: "We arrive when we say we will and plan visits around your week, so window cleaning fits into your life instead of taking it over.",
  },
  {
    icon: MessageIcon,
    title: "Clear communication",
    text: "From your first question to the end of the visit, you’ll know what’s included, when we’re coming and what to expect.",
  },
  {
    icon: SparkleIcon,
    title: "A streak-free finish",
    text: "Clean, clear glass is the whole point. We focus on the details that make windows look their best inside and out.",
  },
];

const steps = [
  {
    icon: ClipboardIcon,
    title: "Request your free quote",
    text: "Share a few details about your property and the services you’re interested in. It only takes a couple of minutes.",
  },
  {
    icon: CalendarIcon,
    title: "Choose a time that works",
    text: "We’ll confirm your quote, answer any questions and schedule a visit that suits your week.",
  },
  {
    icon: SparkleIcon,
    title: "Enjoy the clearer view",
    text: "We take care of the cleaning while you get your weekend back — and a brighter home or business to enjoy.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-mist px-4 py-1.5 text-sm font-semibold text-navy">
              <MapPinIcon className="size-4 text-teal-dark" />
              Serving Calgary &amp; surrounding communities
            </p>
            <h1 className="text-4xl leading-[1.1] font-extrabold sm:text-5xl lg:text-[3.5rem]">
              Crystal-Clear Windows Without the Weekend Chore
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75 sm:text-xl">
              Professional residential and commercial window cleaning throughout Calgary.
              ClearPeak makes it easy to enjoy cleaner glass, brighter spaces and a
              streak-free finish without giving up your weekend.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" withArrow>
                Get a Free Quote
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View Our Services
              </ButtonLink>
            </div>
            <ul className="mt-8 flex flex-col gap-3 text-sm font-medium text-ink/75 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {["Free, no-obligation quotes", "Residential & commercial", "Interior & exterior"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckIcon className="size-4 text-teal-dark" strokeWidth={2.5} />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift lg:aspect-[5/4]">
            <Image
              src="/images/hero-window-cleaning.jpg"
              alt="ClearPeak window cleaner washing the exterior glass of a home"
              fill
              preload
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[65%_center]"
            />
          </div>
        </Container>
      </section>

      {/* 1. Calgary Window Cleaning Made Simple */}
      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-last aspect-[4/3] overflow-hidden rounded-3xl shadow-soft lg:order-first">
            <Image
              src="/images/window-detail.jpg"
              alt="Squeegee clearing soapy water from a window to reveal clear glass"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Why hire a pro"
              title="Calgary Window Cleaning Made Simple"
              intro="Clean glass lets in more daylight, sharpens the view and makes a whole property feel better cared for. Getting there on your own, though, usually means a lost Saturday, a wobbly ladder and a hazy film that never quite comes off."
            />
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              Handing the job to ClearPeak is the easier route. Tell us what you’d like done,
              choose a time that suits you and we’ll look after the rest, returning your glass to
              a crisp, clear finish while your day stays your own.
            </p>
            <div className="mt-8">
              <CheckList
                items={[
                  "A clear, no-cost quote before any work begins",
                  "Visits planned around your routine, not ours",
                  "Suited to houses, shopfronts and smaller commercial spaces",
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Window Cleaning Services */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title="Window Cleaning Services"
              intro="Choose the service that suits your property, or combine them for a complete clean from the glass to the tracks."
            />
            <ButtonLink href="/services" variant="secondary" withArrow className="self-start md:self-auto">
              All Services
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-mist bg-offwhite shadow-soft transition-shadow hover:shadow-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-navy text-teal">
                    <ServiceIcon name={service.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-ink/75">{service.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-teal-dark group-hover:text-navy">
                    Learn more
                    <ArrowRightIcon className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Why Calgary Chooses ClearPeak */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The ClearPeak difference"
              title="Why Calgarians Choose ClearPeak"
              intro="Good window cleaning comes down to doing the simple things well: showing up on time, working carefully and keeping you informed."
            />
            <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-3xl shadow-soft lg:block">
              <Image
                src="/images/window-cleaner-worker.jpg"
                alt="Window cleaner applying cleaning solution to exterior glass"
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:self-center">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-mist bg-white p-7 shadow-soft">
                <span className="flex size-12 items-center justify-center rounded-xl bg-teal/15 text-teal-dark">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink/75">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. A Clearer View in Three Simple Steps */}
      <section className="bg-navy py-16 sm:py-24">
        <Container>
          <SectionHeading
            light
            align="center"
            eyebrow="How it works"
            title="A Clearer View in Three Simple Steps"
            intro="Getting your windows cleaned should be the easy part of your week."
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <li key={title} className="rounded-2xl bg-navy-light p-8 ring-1 ring-white/10">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-teal text-navy">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-heading text-4xl font-extrabold text-white/15">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 leading-relaxed text-white/75">{text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 text-center">
            <ButtonLink href="/contact" withArrow>
              Get a Free Quote
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* 5. Proudly Serving Calgary */}
      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Service area"
              title="Proudly Serving Calgary"
              intro="ClearPeak provides residential and light commercial window cleaning throughout Calgary and surrounding communities."
            />
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              Whether you own a family home, a townhouse, a street-front shop or a small office,
              we’d be glad to help. If you’re just outside the city, reach out and we’ll let you
              know whether your location is within our service area.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Check Your Area</ButtonLink>
              <ButtonLink href={contact.phoneHref} variant="secondary">
                Call {contact.phone}
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Homes", text: "Houses, townhomes, duplexes and condos." },
              { title: "Storefronts", text: "Retail and street-level business glass." },
              { title: "Offices", text: "Small offices and light commercial spaces." },
              { title: "Surrounding areas", text: "Nearby communities — just ask." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl bg-white p-6 shadow-soft">
                <MapPinIcon className="size-6 shrink-0 text-teal-dark" />
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-ink/75">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Final quote CTA */}
      <QuoteCta />
    </>
  );
}
