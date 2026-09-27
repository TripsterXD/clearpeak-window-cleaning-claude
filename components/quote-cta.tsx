import Image from "next/image";
import { contact } from "@/lib/site";
import { PhoneIcon } from "./icons";
import { ButtonLink, Container } from "./ui";

export function QuoteCta({
  title = "Ready for Clearer Windows?",
  text = "Tell us a little about your property and we’ll get back to you with a free, no-obligation quote.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-navy px-6 py-14 shadow-lift sm:px-12 sm:py-16 lg:px-16">
          <Image
            src="/images/window-detail.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="-z-10 object-cover opacity-15"
          />
          <div className="max-w-2xl">
            <h2 className="text-3xl leading-tight font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">{text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" withArrow>
                Get a Free Quote
              </ButtonLink>
              <ButtonLink href={contact.phoneHref} variant="outlineLight">
                <PhoneIcon className="size-5" />
                {contact.phone}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
