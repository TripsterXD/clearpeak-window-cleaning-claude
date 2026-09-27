import type { Metadata } from "next";
import Image from "next/image";
import {
  CalendarIcon,
  MessageIcon,
  ShieldIcon,
  SparkleIcon,
} from "@/components/icons";
import { QuoteCta } from "@/components/quote-cta";
import { CheckList, Container, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ClearPeak Window Cleaning offers straightforward service, careful work, dependable scheduling and clear communication for Calgary homes and businesses.",
};

const values = [
  {
    icon: SparkleIcon,
    title: "Straightforward service",
    text: "No confusing packages or pressure. We explain what’s included, give you a clear quote and do the work we agreed on.",
  },
  {
    icon: ShieldIcon,
    title: "Careful work",
    text: "We work carefully around your home or business, take care with furnishings and landscaping, and pay attention to the details.",
  },
  {
    icon: CalendarIcon,
    title: "Dependable scheduling",
    text: "Your time matters. We schedule visits that work for you and keep you informed if anything changes.",
  },
  {
    icon: MessageIcon,
    title: "Clear communication",
    text: "Questions are always welcome. You’ll know what to expect before, during and after every appointment.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ClearPeak"
        title="Window Cleaning Done Carefully, Clearly and On Schedule"
        intro="ClearPeak Window Cleaning helps Calgary homeowners and local businesses enjoy clean, bright windows without the hassle of doing it themselves."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our approach"
              title="Simple, Honest Service From Start to Finish"
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
              <p>
                We believe hiring a window cleaner should be easy. You shouldn’t have to chase
                anyone for a quote, wonder when someone will show up or guess what you’re paying
                for.
              </p>
              <p>
                That’s why ClearPeak keeps things straightforward. We listen to what you need,
                recommend the right service for your property and handle the work with care, so
                you can enjoy a clearer view and more of your free time.
              </p>
            </div>
            <div className="mt-8">
              <CheckList
                items={[
                  "Residential and light commercial properties",
                  "Interior, exterior or complete window cleaning",
                  "Screen, track and sill cleaning available",
                  "Serving Calgary and surrounding communities",
                ]}
              />
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lift sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/images/hero-window-cleaning.jpg"
              alt="Window cleaner carefully washing the exterior glass of a home"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[60%_center]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="What you can expect"
            title="The Standards Behind Every Visit"
            intro="Every appointment is guided by the same four commitments."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-mist bg-offwhite p-7 shadow-soft">
                <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-teal">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink/75">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft lg:order-last">
            <Image
              src="/images/window-cleaner-worker.jpg"
              alt="Window cleaner washing exterior glass, seen from inside"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Built around you"
              title="Service That Fits Your Property and Your Week"
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
              <p>
                Every property is different. A bungalow with a few ground-floor windows needs a
                different plan than a two-storey home or a busy storefront. We take the time to
                understand your property before we quote, so the service matches what you
                actually need.
              </p>
              <p>
                For businesses, we aim to work around your hours and keep disruption to a
                minimum. For homeowners, we make it easy to choose interior, exterior or complete
                cleaning, with screens, tracks and sills available as add-ons.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <QuoteCta
        title="Let’s Talk About Your Windows"
        text="Request a free quote and we’ll get back to you with clear pricing and available times."
      />
    </>
  );
}
