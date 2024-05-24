module.exports = function getStudentIdsSum(students) {
  return students.reduce((sum, std) => sum + std.id, 0);
};
