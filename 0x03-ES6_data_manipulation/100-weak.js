export const weakMap = new WeakMap();

const ENDPOINT_MAX_CALLS = 5;

export function queryAPI(endpoint) {
    if (!weakMap.has(endpoint)){
        weakMap.set(endpoint, 0);
    }
    weakMap.set(endpoint, weakMap.get(endpoint) +1 );
    if (weakMap.get(endpoint) >= ENDPOINT_MAX_CALLS) {
        throw new Error('Endpoint load is high');
    }
}
