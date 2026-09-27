import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRightIcon, CheckIcon } from "./icons";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "outlineLight" | "navy";

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors duration-150";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-teal text-navy shadow-soft hover:bg-[#2bb294]",
  secondary:
    "border border-navy/15 bg-white text-navy shadow-soft hover:border-navy/30 hover:bg-mist",
  outlineLight: "border border-white/40 text-white hover:border-white hover:bg-white/10",
  navy: "bg-navy text-white shadow-soft hover:bg-navy-light",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  withArrow = false,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant; withArrow?: boolean }) {
  return (
    <Link className={`${buttonBase} ${buttonVariants[variant]} ${className}`} {...props}>
      {children}
      {withArrow && <ArrowRightIcon className="size-5" />}
    </Link>
  );
}

export function TextLink({
  light = false,
  ...props
}: ComponentProps<typeof Link> & { light?: boolean }) {
  return (
    <Link
      className={`font-semibold underline underline-offset-4 ${
        light ? "text-teal hover:text-white" : "text-teal-dark hover:text-navy"
      }`}
      {...props}
    />
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-3 text-sm font-semibold tracking-wider uppercase ${
        light ? "text-teal" : "text-teal-dark"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`text-3xl leading-tight font-bold sm:text-4xl ${light ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-lg leading-relaxed ${light ? "text-white/80" : "text-ink/75"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="bg-navy py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="text-4xl leading-tight font-extrabold text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/80 sm:text-xl">{intro}</p>
        </div>
      </Container>
    </section>
  );
}

export function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
            <CheckIcon className="size-3.5" strokeWidth={2.5} />
          </span>
          <span className={light ? "text-white/85" : "text-ink/80"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
