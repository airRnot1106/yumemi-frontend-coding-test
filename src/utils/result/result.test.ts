import { describe, expect, expectTypeOf, it, vi } from 'vitest';
import {
  Err,
  err,
  mapResult,
  matchResult,
  Ok,
  ok,
  Result,
  unwrapResult,
} from './result';

describe('Result型', () => {
  it('ok()はOk型を返す', () => {
    expect.assertions(1);
    const value = 42;
    const result = ok(value);

    expect(result).toEqual({ ok: true, data: value });
    expectTypeOf(result).toEqualTypeOf<Ok<number>>();
  });

  it('err()はErr型を返す', () => {
    expect.assertions(1);
    const error = new Error('boom');
    const result = err(error);

    expect(result).toEqual({ ok: false, error });
    expectTypeOf(result).toEqualTypeOf<Err<Error>>();
  });

  describe('mapResult()', () => {
    it('Okを受け取った場合はfnを適用し、Ok<U>を返す', () => {
      expect.assertions(1);
      const initial = ok(10);
      const result = mapResult(initial, (n) => (n + 5).toString());

      expect(result).toEqual(ok('15'));
      expectTypeOf(result).toEqualTypeOf<Result<string, unknown>>();
    });

    it('Errを受け取った場合はfnを呼ばずにそのまま返す', () => {
      expect.assertions(2);
      const error = new Error('boom');
      const initial = err(error);
      const fn = vi.fn((n: number) => n + 5);

      const result = mapResult(initial, fn);

      expect(result).toEqual(err(error));
      expect(fn).not.toHaveBeenCalled();
      expectTypeOf(result).toEqualTypeOf<Result<number, Error>>();
    });
  });

  describe('matchResult()', () => {
    it('Okを受け取った場合はsuccessFnを呼び、その結果を返す', () => {
      expect.assertions(3);
      const matchper = vi.fn((n: number) => n * 2);
      const errorHandler = vi.fn((e: Error) => e);

      const initial = ok(21);
      const matchped = matchResult(initial, matchper, errorHandler);

      expect(matchped).toBe(42);
      expect(matchper).toHaveBeenCalledOnce();
      expect(errorHandler).not.toHaveBeenCalled();
    });

    it('Errを受け取った場合はerrorFnを呼び、その結果を返す', () => {
      expect.assertions(3);
      const matchper = vi.fn((n: number) => n * 2);
      const errorHandler = vi.fn((e: Error) => e);

      const initialError = err(new Error('fail'));
      const matchped = matchResult(initialError, matchper, errorHandler);

      expect(matchped).toBe(initialError.error);
      expect(matchper).not.toHaveBeenCalled();
      expect(errorHandler).toHaveBeenCalledOnce();
    });
  });

  describe('unwrapResult()', () => {
    it('Okを受け取った場合は[data, undefined]のタプルを返す', () => {
      expect.assertions(1);
      const value = 123;
      const result = unwrapResult<number, Error>(ok(value));

      expect(result).toEqual([value, undefined]);
    });

    it('Errを受け取った場合は[undefined, error]のタプルを返す', () => {
      expect.assertions(1);
      const error = new Error('fail');
      const result = unwrapResult(err(error));

      expect(result).toEqual([undefined, error]);
    });

    it('片方の値の型が確定した時点で、もう片方の値の型が確定する', () => {
      expect.assertions(0);
      const result = unwrapResult<number, string>(ok(123));

      const [value, error] = result;

      if (error == null) {
        expectTypeOf(value).toEqualTypeOf<number>();
        expectTypeOf(error).toEqualTypeOf<undefined>();
      }
    });
  });
});
