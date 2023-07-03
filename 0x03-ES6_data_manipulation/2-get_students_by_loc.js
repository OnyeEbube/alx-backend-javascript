export default function getStudentByLocation(students, location) {
  return students.filter((students) => students.location === location);
}
