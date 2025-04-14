import { describe, expect, it } from 'vitest';
import { type Result, err, ok } from './result';

class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomError';
  }
}

describe('Result 型ユーティリティ', () => {
  describe('ok 関数', () => {
    it('ok(data) は ok=true, data に与えた値を保持する', () => {
      expect.assertions(1);
      const value = 42;
      const result = ok(value);

      expect(result.data).toBe(value);
    });

    it('ok の戻り値は Result<T, E> の Ok<T> である', () => {
      expect.assertions(2);
      const str = 'hello';
      const result: Result<string, Error> = ok(str);
      expect(result.ok).toBe(true);
      // biome-ignore lint/suspicious/noExplicitAny: プロパティが存在しないことを確認するため
      expect((result as any).error).toBeUndefined();
    });
  });

  describe('err 関数', () => {
    it('err(error) は ok=false, error に与えた Error を保持する', () => {
      expect.assertions(2);
      const error = new CustomError('failure');
      const result = err(error);

      expect(result.error).toBeInstanceOf(CustomError);
      expect(result.error.message).toBe('failure');
    });

    it('err の戻り値は Result<T, E> の Err<E> である', () => {
      expect.assertions(2);
      const error = new Error('oops');
      const result: Result<number, Error> = err(error);
      expect(result.ok).toBe(false);
      // biome-ignore lint/suspicious/noExplicitAny: プロパティが存在しないことを確認するため
      expect((result as any).data).toBeUndefined();
    });
  });
});
