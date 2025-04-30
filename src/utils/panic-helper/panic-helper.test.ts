import {
  afterEach,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from 'vitest';
import { shouldNeverHappen } from './panic-helper';

const ORIGINAL_ENV = process.env.NODE_ENV ?? '';

describe('shouldNeverHappen()', () => {
  let errorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    errorSpy.mockRestore();
    // @ts-expect-error
    process.env.NODE_ENV = ORIGINAL_ENV;
    vi.restoreAllMocks();
  });

  it('NODE_ENVがproductionのとき例外を投げる', () => {
    expect.assertions(2);
    // @ts-expect-error
    process.env.NODE_ENV = 'production';

    // 本体の挙動
    const call = () => shouldNeverHappen('fatal', { code: 123 });

    expect(call).toThrowError('This should never happen: fatal');
    expect(errorSpy).toHaveBeenCalledWith('fatal', { code: 123 });
  });

  it('NODE_ENVがproductionではなくても例外を投げる', () => {
    expect.assertions(2);
    // @ts-expect-error
    process.env.NODE_ENV = 'development';

    const call = () => shouldNeverHappen('dev-path');

    expect(call).toThrowError('This should never happen: dev-path');
    expect(errorSpy).toHaveBeenCalledWith('dev-path');
  });

  it('戻り値型がneverであることをコンパイル時に保証する', () => {
    expect.assertions(0);
    type Return = ReturnType<typeof shouldNeverHappen>;
    expectTypeOf<Return>().toEqualTypeOf<never>();
  });
});
