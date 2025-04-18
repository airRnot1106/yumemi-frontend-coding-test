type Ok<T> = {
  ok: true;
  data: T;
};

type Err<E = Error> = {
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
