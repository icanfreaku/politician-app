angular.module('myapp').factory('rssService', ['searchService', function(searchService) {
  
  var factory = {};

  factory.getRss = function (politicians,offset) {
    var query = { "bool": { "should": [ ] } };

    var matchPlaceholder = { "match" : 
                    { "description" : 
                        { "query": "", "operator": "and" }
                    }
                };

    var matches = [];


    for (var i=0; i< politicians.length; i++) {
      var match = angular.copy(matchPlaceholder);
      match.match.description.query = politicians[i].first_name + " " + politicians[i].last_name;
      matches.push(match);
    }
    query.bool.should = matches;

    var sort = { "published": { "order": "desc" }};

    return searchService.search(query, offset, 10, "rss", "rss", sort);

  };

  return factory;
}]);