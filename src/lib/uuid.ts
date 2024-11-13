export async function getUUID(): Promise<string> {
  const response = await fetch("https://httpbin.org/uuid");
  const data = await response.json();
  return data.uuid ?? "";
}
