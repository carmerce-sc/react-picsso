type AnyFunction = (...args: any[]) => any;
type Cache = {
  [key: string]: any;
};

function memoize<T extends AnyFunction>(fn: T): T {
  const cache: Cache = {};
  return function (...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);
    if (!cache.hasOwnProperty(key)) {
      cache[key] = fn(...args);
    }
    return cache[key];
  } as T;
}

export default memoize;
