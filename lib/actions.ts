"use server";
import { Meal } from "@/lib/db";
import { getEmail, getOptionalFile, getString } from "@/lib/normalize";
import { slugify } from "@/lib/slug";
import { redirect } from "next/navigation";
import { createMeal } from "./meals";
import { saveFile } from "./save_file";
async function getMealFromFormData(form: FormData): Promise<Meal> {
  const title = getString(form, "title");
  const slug = slugify(title);
  const file = getOptionalFile(form, "image");

  const meal: Meal = {
    title,
    slug,
    summary: getString(form, "summary"),
    instructions: getString(form, "instructions"),
    creator: getString(form, "name"),
    creator_email: getEmail(form, "email"),
    image: null,
  };
  if (file) {
    meal.image = await saveFile(file);
  }
  return meal;
}
export async function shareMeal(formData: FormData) {
  const meal = await getMealFromFormData(formData);
  await createMeal(meal);
  redirect("/meals");
}
