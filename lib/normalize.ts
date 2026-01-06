export class FormValidationError extends Error {
  constructor(public field: string, public message: string) {
    super(message);
  }
}

export function getString(form: FormData, key: string): string {
  let value = form.get(key);
  if (typeof value != "string") {
    throw new FormValidationError(key, `${key} is required and must be string`);
  }
  value = value.trim().toLowerCase();
  if (value === "") {
    throw new FormValidationError(key, `${key} can't be empty`);
  }
  return value;
}

export function getOptionalString(form: FormData, key: string): string | null {
  let value = form.get(key);
  if (value == null) return value;
  if (typeof value != "string") {
    throw new FormValidationError(key, `${key} must be string`);
  }
  value = value.trim().toLowerCase();
  if (value === "") {
    return null;
  }
  return value;
}
export function getFile(form: FormData, key: string): File {
  const value = form.get(key);
  if (value == null) {
    throw new FormValidationError(key, `${key} is required`);
  }
  if (!(value instanceof File)) {
    throw new FormValidationError(key, `${key} must be a valid image`);
  }
  if (value.size === 0) {
    throw new FormValidationError(key, `${key} must be a valid image`);
  }
  return value;
}
export function getOptionalFile(form: FormData, key: string): File | null {
  const value = form.get(key);
  if (value == null) return null;
  if (!(value instanceof File)) {
    throw new FormValidationError(key, `${key} must be a valid Image`);
  }
  if (value.size === 0) return null;
  return value;
}

export function getEmail(form: FormData, key: string): string {
  const email = getString(form, key);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new FormValidationError(key, `${key} must be a valid email address`);
  }
  return email;
}
