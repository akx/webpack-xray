export function sanitizeModuleName(name: string): string {
  return name.replace(/(\.\/)?node_modules[/]?/g, '~');
}

// Ported from https://raw.githubusercontent.com/hughsk/common-prefix/master/index.js
export function commonPrefix(strings: string[]): string | undefined {
  if (strings.length === 0) {
    return undefined;
  }
  const first = strings[0] || '';
  let commonLength = first.length;

  for (let i = 1; i < strings.length; ++i) {
    for (let j = 0; j < commonLength; ++j) {
      if (strings[i].charAt(j) !== first.charAt(j)) {
        commonLength = j;
        break;
      }
    }
  }

  return first.slice(0, commonLength);
}

export function omit(obj: object, keysToOmit: string[]): object {
  const newObject = {};
  Object.keys(obj).forEach((key) => {
    if (!keysToOmit.includes(key)) {
      newObject[key] = obj[key];
    }
  });
  return newObject;
}

export function uniq<T>(inArr: ArrayLike<T>): T[] {
  const out: T[] = [];
  const seen = new Set<T>();

  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < inArr.length; i++) {
    const el = inArr[i];
    if (!seen.has(el)) {
      seen.add(el);
      out.push(el);
    }
  }
  return out;
}
