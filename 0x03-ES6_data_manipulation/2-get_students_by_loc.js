module.exports = function getStudentsByLocation(students, city) {
  return students.filter((value) => value.location === city);
};
