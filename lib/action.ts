"use server";
import { Meal } from "@/lib/db";
import { getOptionalString, getString } from "@/lib/normalize";
import { slugify } from "@/lib/slug";
function getMealFromFormData(form: FormData): Meal {
  const title = getString(form, "title");
  const meal: Meal = {
    title: title,
    slug: slugify(title),
    summary: getString(form, "summary"),
    instructions: getOptionalString(form, "instructions"),
    creator: getOptionalString(form, "name"),
    creator_email: getOptionalString(form, "email"),
    image: "",
  };
  return meal;
}
export async function shareMeal(formData: FormData) {
  const meal = getMealFromFormData(formData);
  console.log(meal);
}
