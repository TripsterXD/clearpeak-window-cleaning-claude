import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-wider text-teal-dark uppercase">Page not found</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">This page isn’t here</h1>
        <p className="mt-5 text-lg text-ink/75">
          The page you’re looking for may have moved. Head back home or request your free quote.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Get a Free Quote
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
