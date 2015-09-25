attendance.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {

    // Give this controller access to the StudentsFactory
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;

    // Student methods
    $scope.signIn = function(student) {
        student.signedIn = true;
    };

    $scope.signOut = function(student) {
        student.signedOut = true;
    };
});
