export default function getListStudents() {
  class Students {
    constructor(id, firstName, location) {
      this.id = id;
      this.firstName = firstName;
      this.location = location;
    }
  }
  const student1 = new Students(1, 'Guillame', 'San Francisco');
  const student2 = new Students(2, 'James', 'Columbia');
  const student3 = new Students(5, 'Serena', 'San Francisco');


  return [student1, student2, student3];
}
