function unsource(data) {
  if (typeof data === 'object' && data !== null) {
    Object.keys(data).forEach((key) => {
      if (key === 'source') {
        data[key] = '/* elided */';
        return;
      }
      const value = data[key];
      if (Array.isArray(value)) {
        value.forEach(unsource);
      }
      if (typeof value === 'object') {
        unsource(value);
      }
    });
  }
}

module.exports = unsource;

if (module.parent === null) {
  const {stdin, stdout} = process;
  stdin.resume();
  stdin.setEncoding('utf8');
  const buf = [];
  stdin.on('data', function (chunk) {
    buf.push(chunk);
  });
  stdin.on('end', function () {
    const data = JSON.parse(buf.join());
    unsource(data);
    stdout.write(JSON.stringify(data));
    stdout.write('\n');
  });
}
