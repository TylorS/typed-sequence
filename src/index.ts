export function sequence<T>(
  items: Array<T>,
  call: (item: T) => any): Promise<any>
{
  return items.reduce((promise: Promise<any>, t: T) => {
    return promise.then(() => coerceToPromise(call(t)));
  }, Promise.resolve());
}

function coerceToPromise(x: any): Promise<any> {
  return x && typeof x.subscribe === 'function'
    ? observableToPromise(x)
    : Promise.resolve(x);
}

function observableToPromise(x: any) {
  return new Promise((resolve, reject) => {
    x.subscribe(createObserver(resolve, reject));
  });
}

function createObserver(resolve: Function, reject: Function) {
  return {
    next: Function.prototype,
    error: reject,
    complete: resolve,
  };
}
