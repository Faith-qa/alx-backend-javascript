/* eslint-disable class-methods-use-this */
class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = value;
  }

  get student() {
    return this.__students;
  }

  set students(currStudents) {
    if (typeof currStudents === 'object') {
      for (const student in currStudents) {
        if (typeof student !== 'string') {
          throw new TypeError('Students must be in the array');
        }
      }
    } else {
      throw new TypeError('Student must be in the Array');
    }
    this.__students = currStudents;
  }
}

export default HolbertonCourse;
