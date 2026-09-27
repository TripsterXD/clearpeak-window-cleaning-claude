import { propertyTypeOptions, serviceTypeOptions } from "./site";

// Shared by the quote form (client) and the /api/quote route (server),
// so both sides apply exactly the same rules.

export type QuoteField = "name" | "email" | "phone" | "serviceType" | "propertyType" | "details";
export type QuoteInput = Record<QuoteField, string>;
export type QuoteErrors = Partial<Record<QuoteField, string>>;

const FIELDS: QuoteField[] = ["name", "email", "phone", "serviceType", "propertyType", "details"];

const MAX_LENGTH: Record<QuoteField, number> = {
  name: 120,
  email: 254,
  phone: 40,
  serviceType: 120,
  propertyType: 120,
  details: 5000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Reads the quote fields from form data or a parsed JSON body, trimming each value. */
export function readQuoteInput(source: FormData | Record<string, unknown>): QuoteInput {
  const get = (field: QuoteField) =>
    source instanceof FormData ? source.get(field) : source[field];
  return Object.fromEntries(
    FIELDS.map((field) => {
      const raw = get(field);
      return [field, typeof raw === "string" ? raw.trim() : ""];
    }),
  ) as QuoteInput;
}

export function validateQuote(input: QuoteInput): QuoteErrors {
  const errors: QuoteErrors = {};

  if (!input.name) errors.name = "Please enter your name.";
  if (!input.email) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(input.email)) errors.email = "Please enter a valid email address.";
  if (!input.phone) errors.phone = "Please enter your phone number.";
  else if (input.phone.replace(/\D/g, "").length < 10)
    errors.phone = "Please enter a valid phone number, including area code.";
  if (!input.serviceType) errors.serviceType = "Please choose a service type.";
  else if (!serviceTypeOptions.includes(input.serviceType))
    errors.serviceType = "Please choose a service type from the list.";
  if (!input.propertyType) errors.propertyType = "Please choose a property type.";
  else if (!propertyTypeOptions.includes(input.propertyType))
    errors.propertyType = "Please choose a property type from the list.";

  for (const field of FIELDS) {
    if (!errors[field] && input[field].length > MAX_LENGTH[field]) {
      errors[field] = `Please keep this under ${MAX_LENGTH[field]} characters.`;
    }
  }

  return errors;
}
