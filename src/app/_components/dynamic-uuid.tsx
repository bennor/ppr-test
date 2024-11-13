import { delay } from "@/lib/delay";
import { cookies } from "next/headers";

const dateFormat = Intl.DateTimeFormat("en-AU", {
  dateStyle: "short",
  timeStyle: "medium",
});

export default async function DynamicUUID() {
  const cookieStore = await cookies();
  const uuid = cookieStore.get("uuid")?.value;
  await delay(200);
  const now = new Date();
  const iso = now.toISOString();
  const formatted = dateFormat.format(now);
  return (
    <p>
      <b>Dynamic:</b> {uuid} (at{" "}
      <time suppressHydrationWarning dateTime={iso}>
        {formatted}
      </time>
      )
    </p>
  );
}
