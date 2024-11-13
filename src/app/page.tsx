import { Suspense } from "react";
import StaticContent from "./_components/static-content";
import DynamicUUID from "./_components/dynamic-uuid";

export const experimental_ppr = true;

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-semibold text-2xl">PPR Example</h1>
        <StaticContent />
        <Suspense fallback={<p>Loading...</p>}>
          <DynamicUUID />
        </Suspense>
      </main>
    </div>
  );
}
