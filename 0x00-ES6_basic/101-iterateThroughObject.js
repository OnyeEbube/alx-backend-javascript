export default function iterateThroughObject(reportWithIterator) {
  let output = '';
  const keys = Object.keys(reportWithIterator);

  for (const [index, key] of keys.entries()) {
    output += reportWithIterator[key];

    if (index !== keys.length - 1) {
      output += ' | ';
    }
  }

  return output;
}
