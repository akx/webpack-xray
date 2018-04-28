export function sanitizeModuleName(name: string): string {
  return name.replace(/(\.\/)?node_modules/g, '~');
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
