attendance.factory('StudentsFactory', function StudentsFactory() {
    var factory = {};

    // Initialize some students for the porpoises of this exercise
    factory.students = [
        {
            name: 'Brentwood Davis',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'Brentwood Davidson',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'Brent Dabis',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'Trent Davidman',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'Trentman Davison',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'Brandt Dais',
            signedIn: false,
            signedOut: false
        },
        {
            name: 'Brentwood Dials',
            signedIn: false,
            signedOut: false
        },
    ];

    // No methods on students. Those will be in the students controller.

    return factory;
});
