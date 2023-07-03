export default function getStudentIdsSum(myList) {
  const ids = myList.map((obj) => obj.id);
  const initialValue = 0;
  const idsSum = ids.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue,
  );
  return idsSum;
}
