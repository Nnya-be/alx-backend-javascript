export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  } else {
    const count = weakMap.get(endpoint);
    weakMap.set(endpoint, count + 1);
  }
  const updatedCount = weakMap.get(endpoint);
  if (updatedCount >= 5) {
    throw new Error("Endpoint load is high");
  }
}
