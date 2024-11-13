import { getBuildId } from "@/lib/build-id";

export default async function StaticContent() {
  const buildId = getBuildId();
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium text-muted-foreground">Static ID</div>
      <code className="relative rounded bg-muted px-[0.5rem] py-[0.3rem] font-mono text-sm">
        {buildId}
      </code>
    </div>
  );
}
