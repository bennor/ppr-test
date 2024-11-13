import { delay } from "@/lib/delay";
import { cookies } from "next/headers";

const dateFormat = Intl.DateTimeFormat("en-AU", {
  dateStyle: "short",
  timeStyle: "medium",
});

export default async function DynamicUUID() {
  const cookieStore = await cookies();
  const uuid = cookieStore.get("uuid")?.value;
  await delay(500);
  const now = new Date();
  const iso = now.toISOString();
  const formatted = dateFormat.format(now);
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium text-muted-foreground">
        Dynamic ID
      </div>
      <code className="relative rounded bg-muted px-[0.5rem] py-[0.3rem] font-mono text-sm flex items-center gap-2">
        <span>{uuid}</span>
        <time dateTime={iso} className="text-xs text-muted-foreground">
          (at {formatted})
        </time>
      </code>
    </div>
  );
}
