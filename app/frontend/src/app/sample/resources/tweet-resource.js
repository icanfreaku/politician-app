angular.module('myapp').factory('Tweet', ['$resource', function($resource) {
    return $resource('/api/tweet/:id/', {id: '@id'});
    }
]);