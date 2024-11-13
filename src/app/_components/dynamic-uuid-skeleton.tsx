"use client";

export default function DynamicUUIDSkeleton() {
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium text-muted-foreground">
        Dynamic ID
      </div>
      <code className="relative rounded bg-muted px-[0.5rem] py-[0.3rem] font-mono text-sm flex items-center gap-2">
        <span>Loading&hellip;</span>
      </code>
    </div>
  );
}
