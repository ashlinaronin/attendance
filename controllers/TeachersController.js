attendance.controller('TeachersCtrl', function TeachersCtrl($scope, StudentsFactory) {
    // Teacher can't perform any operations on data, just need to see students
    // from the factory.
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;
});
