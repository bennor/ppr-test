"use client";

import { useFormStatus } from "react-dom";
import { updateUUID } from "../actions";
import { useActionState } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UpdateUUIDForm({ disabled = false }) {
  const [, formAction] = useActionState(updateUUID, undefined);
  return (
    <form action={formAction}>
      <UpdateUUIDButton disabled={disabled} />
    </form>
  );
}

function UpdateUUIDButton({ disabled = false }) {
  const { pending } = useFormStatus();
  return (
    <Button
      className="w-full sm:w-auto"
      disabled={disabled || pending}
      type="submit"
    >
      <RefreshCw className="mr-2 h-4 w-4" />
      {pending ? "Updating UUID..." : "Update UUID"}
    </Button>
  );
}
