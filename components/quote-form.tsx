"use client";

import { useRef, useState, type FormEvent } from "react";
import { readQuoteInput, validateQuote, type QuoteErrors, type QuoteField } from "@/lib/quote";
import { propertyTypeOptions, serviceTypeOptions } from "@/lib/site";
import { CheckIcon } from "./icons";

const SUBMIT_ERROR =
  "Sorry, we couldn’t send your request right now. Please try again, or call us instead.";

const controlClass =
  "block w-full min-h-12 rounded-xl border bg-white px-4 py-3 text-base text-ink shadow-sm transition-colors placeholder:text-ink/40 focus:border-teal focus:ring-2 focus:ring-teal/30 focus:outline-none";

function controlState(error?: string) {
  return error ? "border-red-500" : "border-navy/15 hover:border-navy/30";
}

function Field({
  id,
  label,
  error,
  optional = false,
  children,
}: {
  id: QuoteField;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="mb-2 block font-semibold text-navy">
        {label}
        {optional && <span className="ml-1 font-normal text-ink/60">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const submittingRef = useRef(false);

  function focusFirstInvalid(fieldErrors: QuoteErrors) {
    const firstInvalid = Object.keys(fieldErrors)[0];
    if (firstInvalid) formRef.current?.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Ignore repeat clicks or Enter presses while a request is in flight.
    if (submittingRef.current) return;

    const form = event.currentTarget;
    const input = readQuoteInput(new FormData(form));
    const nextErrors = validateQuote(input);
    setErrors(nextErrors);
    setSubmitError(null);

    if (Object.keys(nextErrors).length > 0) {
      focusFirstInvalid(nextErrors);
      return;
    }

    submittingRef.current = true;
    setSubmitting(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      const result: { error?: string; errors?: QuoteErrors } = await response
        .json()
        .catch(() => ({}));

      if (!response.ok) {
        if (result.errors && Object.keys(result.errors).length > 0) {
          setErrors(result.errors);
          focusFirstInvalid(result.errors);
        }
        setSubmitError(result.error ?? SUBMIT_ERROR);
        return;
      }

      form.reset();
      setErrors({});
      setSubmittedName(input.name);
    } catch {
      setSubmitError(SUBMIT_ERROR);
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  const describedBy = (field: QuoteField) => (errors[field] ? `${field}-error` : undefined);

  if (submittedName) {
    return (
      <div role="status" className="py-8 text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
          <CheckIcon className="size-8" strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 text-2xl font-bold">Thanks, {submittedName}!</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink/75">
          Your quote request has been sent. We’ll review your details and get back to you soon
          with your free quote.
        </p>
        <button
          type="button"
          onClick={() => setSubmittedName(null)}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-navy/15 bg-white px-6 font-semibold text-navy hover:bg-mist"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-busy={submitting}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="min-w-0 sm:col-span-2">
          <Field id="name" label="Name" error={errors.name}>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={!!errors.name}
              aria-describedby={describedBy("name")}
              className={`${controlClass} ${controlState(errors.name)}`}
            />
          </Field>
        </div>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={describedBy("email")}
            className={`${controlClass} ${controlState(errors.email)}`}
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy("phone")}
            className={`${controlClass} ${controlState(errors.phone)}`}
          />
        </Field>
        <Field id="serviceType" label="Service Type" error={errors.serviceType}>
          <select
            id="serviceType"
            name="serviceType"
            required
            defaultValue=""
            aria-invalid={!!errors.serviceType}
            aria-describedby={describedBy("serviceType")}
            className={`${controlClass} ${controlState(errors.serviceType)}`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceTypeOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field id="propertyType" label="Property Type" error={errors.propertyType}>
          <select
            id="propertyType"
            name="propertyType"
            required
            defaultValue=""
            aria-invalid={!!errors.propertyType}
            aria-describedby={describedBy("propertyType")}
            className={`${controlClass} ${controlState(errors.propertyType)}`}
          >
            <option value="" disabled>
              Select a property type
            </option>
            {propertyTypeOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <div className="min-w-0 sm:col-span-2">
          <Field id="details" label="Project Details" optional>
            <textarea
              id="details"
              name="details"
              rows={5}
              placeholder="Tell us about your property — number of windows or storeys, interior or exterior, screens and tracks, preferred timing and anything else we should know."
              className={`${controlClass} ${controlState()} resize-y`}
            />
          </Field>
        </div>
      </div>

      {submitError && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {submitError}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink/60">Free, no-obligation quote. No pressure, just clear pricing.</p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-teal px-8 py-3 text-base font-semibold text-navy shadow-soft transition-colors hover:bg-[#2bb294] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Sending…" : "Request My Free Quote"}
        </button>
      </div>
    </form>
  );
}
