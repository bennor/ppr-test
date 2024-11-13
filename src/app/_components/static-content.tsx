import { getBuildId } from "@/lib/build-id";

export default async function StaticContent() {
  const buildId = getBuildId();
  return (
    <p>
      <b>Static:</b> {buildId}
    </p>
  );
}
