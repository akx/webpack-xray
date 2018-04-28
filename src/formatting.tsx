const integerFormatCache: { [key: string]: string } = {};

export function formatInteger(inValue: any): string {
  const value = parseInt(inValue, 10);
  if (integerFormatCache[value]) {
    return integerFormatCache[value];
  }
  return (integerFormatCache[value] = value.toLocaleString('en'));
}
