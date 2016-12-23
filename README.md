# @typed/sequence

> Create sequential code easily

Helps you create a sequence of execution.

## Let me have it!
```sh
npm install --save typed-sequence
```

## API

#### `sequence<T>(items: T[], f: (t: T) => any): Promise<any>`

**Example**

```typescript
import { sequence } from 'typed-sequence';

function f (n: number): Promise<any> {
  // perform some type of asynchronous (or not) operation

  return new Promise((resolve, reject) {
    // exercise for the reader ;)
  })
}

sequence([1, 2, 3], f);
```