"use server";

import { getUUID } from "@/lib/uuid";
// import { expirePath } from "next/cache";
import { cookies } from "next/headers";

export async function updateUUID() {
  const [cookieStore, uuid] = await Promise.all([cookies(), getUUID()]);
  cookieStore.set("uuid", uuid);
  // expirePath("/");
}
