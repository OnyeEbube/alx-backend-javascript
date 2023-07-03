export default function getListStudentIds(myArr) {
  if (!Array.isArray(myArr)) {
    return [];
  }

  return myArr.map(obj => obj.id);
}
