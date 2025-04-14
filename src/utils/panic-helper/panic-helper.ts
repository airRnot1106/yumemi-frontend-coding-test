// biome-ignore lint/suspicious/noExplicitAny:
export const shouldNeverHappen = (msg?: string, ...args: any[]): never => {
  console.error(msg, ...args);
  if (process.env.NODE_ENV !== 'production') {
    // biome-ignore lint/suspicious/noDebugger:
    debugger;
  }

  throw new Error(`This should never happen: ${msg}`);
};
