export default function hasValuesFromArray(newSet, newArraY) {
  for (const elem of newArray) {
    if (!newSet.has(elem)) {
      return false;
    }
  }
  return true;
}

