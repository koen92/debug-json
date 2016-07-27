import util from 'util';

export function formatter(code) {
  return { [code]: v => util.format(`%${code}`, v) };
}

export function formatters(...codes) {
  return codes.reduce((result, code) => ({
    ...result,
    [code]: v => util.format(`%${code}`, v),
  }), {});
}
