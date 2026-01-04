export class FormValidationError extends Error {
  constructor(public field: string, public message: string) {
    super(message);
  }
}

export function getString(form: FormData, key: string): string {
  const value = form.get(key);
  if (typeof value != "string") {
    throw new FormValidationError(key, `${key} is required and must be string`);
  }
  return value;
}
export function getOptionalString(form: FormData, key: string): string | null {
  const value = form.get(key);
  if (value == null) return value;
  if (typeof value != "string")
    throw new FormValidationError(key, `${key} must be string`);
  return value.trim() === "" ? null : value.trim();
}
