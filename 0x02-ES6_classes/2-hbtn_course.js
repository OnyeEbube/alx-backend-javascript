export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) throw new TypeError('Students type must be an Array');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(plc) {
    if (typeof plc !== 'string') throw new TypeError('Name must be a string');
    this._name = plc;
  }

  get length() {
    return this._length;
  }

  set length(plc) {
    if (!Number.isInteger(plc)) throw new TypeError('Length must be a number');
    this._length = plc;
  }

  get students() {
    return this._students;
  }

  set students(plc) {
    if (!Array.isArray(plc)) throw new TypeError('students type must be an Array');
    this._students = plc;
  }
}
