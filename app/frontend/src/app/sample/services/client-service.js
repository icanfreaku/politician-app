angular.module('myapp').service('client', function (esFactory, $location) {
    return esFactory({
        host: $location.host() + ':9200'
    });
});