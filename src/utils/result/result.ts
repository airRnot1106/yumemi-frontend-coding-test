export type Ok<T> = {
  ok: true;
  data: T;
};

export type Err<E = Error> = {
  ok: false;
  error: E;
};

export type Result<T, E = Error> = Ok<T> | Err<E>;

export const ok = <T>(data: T): Ok<T> => ({
  ok: true,
  data,
});

export const err = <E = Error>(error: E): Err<E> => ({
  ok: false,
  error,
});

export const mapResult = <T, U, E>(
  result: Result<T, E>,
  fn: (data: T) => U,
): Result<U, E> => {
  if (result.ok) {
    return ok(fn(result.data));
  }
  return err(result.error);
};

export const matchResult = <T, U, E, D>(
  result: Result<T, E>,
  successFn: (data: T) => U,
  errorFn: (error: E) => D,
) => {
  if (result.ok) {
    return successFn(result.data);
  }
  return errorFn(result.error);
};

export const unwrapResult = <T, E>(result: Result<T, E>) => {
  if (result.ok) {
    return [result.data, undefined] as const;
  }
  return [undefined, result.error] as const;
};
