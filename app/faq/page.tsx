import type { Metadata } from "next";
import { ChevronDownIcon } from "@/components/icons";
import { QuoteCta } from "@/components/quote-cta";
import { ButtonLink, Container, PageHero } from "@/components/ui";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about window cleaning with ClearPeak in Calgary, including how often to clean, screens and tracks, appointments and quotes.",
};

const faqs = [
  {
    question: "How often should I have my windows cleaned?",
    answer:
      "Most homeowners find that cleaning their windows once or twice a year keeps them looking great — often in spring to clear away winter grime and again in late summer or fall. Homes near busy roads, construction or lots of trees may benefit from more frequent cleaning. Storefronts and businesses often choose a regular schedule, such as monthly or seasonally, to keep glass looking consistently professional.",
  },
  {
    question: "Do you clean both interior and exterior windows?",
    answer:
      "Yes. You can choose exterior-only cleaning, interior-only cleaning or a complete service that covers both sides of the glass. We’ll help you decide which option makes the most sense for your property when you request a quote.",
  },
  {
    question: "Do you clean screens and tracks?",
    answer:
      "Yes. Screen, track and sill cleaning is available as an add-on to any window cleaning service. Screens are cleaned to remove dust and pollen, and tracks and sills are cleared of dirt and debris for a more complete finish.",
  },
  {
    question: "Do I need to be home during the appointment?",
    answer:
      "For exterior-only cleaning, you usually don’t need to be home as long as we can safely access the windows, gates are unlocked and pets are secured. For interior cleaning, someone will need to be there to let us in. We’ll confirm access details with you before your appointment.",
  },
  {
    question: "How should I prepare for my appointment?",
    answer:
      "A little preparation helps things go smoothly. For interior cleaning, please move fragile items, decorations and small furniture away from windows, and open blinds or curtains. For exterior cleaning, make sure gates are unlocked and pets are inside or secured. If there’s anything we should know about — like a sticky window or delicate landscaping — just let us know.",
  },
  {
    question: "Do you offer commercial window cleaning?",
    answer:
      "Yes. We provide light commercial window cleaning for storefronts, small offices and similar properties. We can set up one-time or recurring service and will do our best to schedule visits around your business hours.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Getting a quote is free and there’s no obligation. Fill out the quote form on our Contact page with a few details about your property and the services you’re interested in, or give us a call. We’ll follow up to confirm the details and provide your quote.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        intro="Everything you need to know about booking window cleaning with ClearPeak. Don’t see your question? We’re happy to help."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-4 lg:col-span-8">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-mist bg-white shadow-soft open:shadow-lift"
              >
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h2 className="text-lg leading-snug font-bold">{faq.question}</h2>
                  <ChevronDownIcon className="size-5 shrink-0 text-teal-dark transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-ink/75">{faq.answer}</p>
              </details>
            ))}
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-2xl bg-navy p-8 text-white shadow-lift lg:sticky lg:top-28">
              <h2 className="text-2xl font-bold text-white">Still have questions?</h2>
              <p className="mt-3 leading-relaxed text-white/80">
                Reach out and we’ll be happy to help. Our hours are {contact.hours}.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <ButtonLink href={contact.phoneHref}>Call {contact.phone}</ButtonLink>
                <ButtonLink href="/contact" variant="outlineLight">
                  Request a Free Quote
                </ButtonLink>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <QuoteCta />
    </>
  );
}
