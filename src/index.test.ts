import * as assert from 'assert';
import { sequence } from './index';
import { just } from 'most';

describe('sequence', function () {
  it('sequentially runs things', function (done) {
    const expected = [1, 2, 3];

    function call (n: number) {
      assert.strictEqual(n, expected.shift());
      if (expected.length === 0)
        done();
    }

    sequence(expected.slice(0), call);
  });

  it('coerces observables into promises', (done) => {
    const expected = [1, 2, 3];

    function assertCall (n: number) {
      assert.strictEqual(n, expected.shift());
      if (expected.length === 0)
        done();
    }

    function call (n: number) {
      return just(n).tap(assertCall);
    }

    sequence([1, 2, 3], call);
  });
});
