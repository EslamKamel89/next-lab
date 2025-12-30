import sql from "better-sqlite3";
import { Meal } from "./db";
const db = sql("meals.db");
export async function sleep(milliseconds: number) {
  await new Promise((r) => {
    setTimeout(r, milliseconds);
  });
}
export async function getMeals(): Promise<Meal[]> {
  await new Promise((r) => setTimeout(r, 2000));
  return db.prepare(`SELECT * FROM meals`).all() as Meal[];
}
