"use client";

import { useFormStatus } from "react-dom";
import { updateUUID } from "../actions";
import { useActionState } from "react";

export function UpdateUUIDForm() {
  const [, formAction] = useActionState(updateUUID, undefined);
  return (
    <form action={formAction}>
      <UpdateUUIDButton />
    </form>
  );
}

function UpdateUUIDButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-black disabled:bg-gray-500 rounded-sm inline-block px-4 py-2 text-white font-medium"
    >
      {pending ? "Updating UUID..." : "Update UUID"}
    </button>
  );
}
