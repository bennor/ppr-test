export function delay(timeoutMS = 0) {
  return new Promise((res) => setTimeout(res, timeoutMS));
}
