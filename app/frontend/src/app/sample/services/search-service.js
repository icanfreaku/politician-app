angular.module('myapp').factory('searchService', ['$q', 'client', function($q, client) {
  
  var factory = {};

  factory.search = function(query, offset, size, index, type, sort) {
    var deferred = $q.defer();

    client.search({
      index: index,
      type: type,
      body: {
        size: size,
        from: (offset || 0) * size,
        query: query,
        sort: sort
      }
    }).then(function(result) {
      var ii = 0, hits_in, hits_out = [];

      hits_in = (result.hits || {}).hits || [];

      for(; ii < hits_in.length; ii++) {
        var object = hits_in[ii]._source;
        hits_out.push(object);
      }

      deferred.resolve(hits_out);
    }, deferred.reject);

    return deferred.promise;
  };

  return factory;
}]);