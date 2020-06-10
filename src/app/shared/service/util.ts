export function isObject(value: any): boolean {
  return value !== null && !Array.isArray(value) && typeof value === 'object';
}

export function isDefined(value: any) {
  return typeof value !== 'undefined';
}

export function isUndefined(value: any) {
  return typeof value === 'undefined';
}

export function isArray(value: any) {
  return Array.isArray(value);
}

export function isNumber(value: any) {
  return typeof value === 'number';
}

export function isNullOrUndefined(value: any): boolean {
  return value === null || value === undefined;
}

export function isNull(value: any): boolean {
  return value === null;
}

export function isString(value: any): boolean {
  return typeof value === 'string';
}

export function isFunction(value: any): boolean {
  return typeof value === 'function';
}
