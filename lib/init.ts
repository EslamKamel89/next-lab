import { initData } from "./db";

let initialized = false;
export default function ensureInitialized() {
  if (!initialized) {
    console.log("Seeding DB...");
    initData();
    initialized = true;
  }
  console.log("databases already available and seeded");
}
