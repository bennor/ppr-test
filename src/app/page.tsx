import { Suspense } from "react";
import StaticContent from "./_components/static-content";
import DynamicUUID from "./_components/dynamic-uuid";
import { UpdateUUIDForm } from "./_components/update-uuid-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import DynamicUUIDSkeleton from "./_components/dynamic-uuid-skeleton";

export const experimental_ppr = true;

export default function Home() {
  return (
    <div className="min-h-screen bg-muted/40 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>PPR Example</CardTitle>
          <CardDescription>
            A demonstration of Partial Prerendering in Next.js
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <StaticContent />
          <Suspense
            fallback={
              <>
                <DynamicUUIDSkeleton />
                <UpdateUUIDForm disabled />
              </>
            }
          >
            <DynamicUUID />
            <UpdateUUIDForm />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
