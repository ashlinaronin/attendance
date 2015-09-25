var attendance = angular.module('attendance', ['ui.router']);

attendance.config(function($stateProvider, $urlRouterProvider) {

    // Don't need a controller for the welcome page bc it doesn't use data
    $stateProvider.state('welcome', {
        url: '',
        templateUrl: 'partials/welcome.html'
    });

    $stateProvider.state('students', {
        url: 'students',
        templateUrl: 'partials/students.html',
        controller: 'StudentsCtrl'
    });

    // In our class there are several teachers, so teacher will be plural
    $stateProvider.state('teachers', {
        url: 'teachers',
        templateUrl: 'partials/teachers.html',
        controller: 'TeachersCtrl'
    });

});
