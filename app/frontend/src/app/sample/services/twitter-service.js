angular.module('myapp').factory('twitterService', ['searchService', function(searchService) {
  
  var factory = {};

  factory.getTweets = function (politicians,offset) {
    var query = { "bool": { "should": [ ] } };

    var matchPlaceholder = { "match" : 
                    { "message" : 
                        { "query": "", "operator": "and" }
                    }
                };

    var matches = [];


    for (var i=0; i< politicians.length; i++) {
      var match = angular.copy(matchPlaceholder);
      match.match.message.query = politicians[i].first_name + " " + politicians[i].last_name;
      matches.push(match);
    }
    query.bool.should = matches;

    var sort = { "date": { "order": "desc" }};

    return searchService.search(query, offset, 10, "twitter", "tweet", sort);

  };

  return factory;
}]);