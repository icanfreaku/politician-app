(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('myapp', ['ngRoute', 'ngResource', 'ngNamedRoute', 'dcbImgFallback', 'elasticsearch', 'zingchart-angularjs']).config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]).controller('HeaderController', ["$scope", "$location", function ($scope, $location) {

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]).filter('startFrom', function () {
    return function (input, start) {
        start = +start; //parse to int
        return input.slice(start);
    };
});
require('./sample');

},{"./sample":2}],2:[function(require,module,exports){
require('./routes');
require('./services');
require('./resources');

},{"./resources":3,"./routes":16,"./services":24}],3:[function(require,module,exports){
require('./resources-config');
require('./politician-resource');
require('./tweet-resource');

},{"./politician-resource":4,"./resources-config":5,"./tweet-resource":6}],4:[function(require,module,exports){
angular.module('myapp').factory('Politician', ['$resource', function ($resource) {
    return $resource('/api/politicians/:slug', { slug: '@slug' }, {
        'list': { method: 'GET', isArray: true },
        'update': { method: 'PUT' }
    });
}]);

},{}],5:[function(require,module,exports){
angular.module('myapp').config(["$resourceProvider", function ($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

},{}],6:[function(require,module,exports){
angular.module('myapp').factory('Tweet', ['$resource', function ($resource) {
    return $resource('/api/tweet/:id/', { id: '@id' });
}]);

},{}],7:[function(require,module,exports){
angular.module('myapp').controller('AboutController', ["$scope", function ($scope) {}]);

},{}],8:[function(require,module,exports){
angular.module('myapp').config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when('/about', {
        name: 'about',
        templateUrl: 'sample/routes/about/about.html',
        controller: 'AboutController',
        controllerAs: 'ctrl'
    });
}]);

},{}],9:[function(require,module,exports){
require('./about-controller');
require('./about-routes');

},{"./about-controller":7,"./about-routes":8}],10:[function(require,module,exports){
angular.module('myapp').controller('ContactController', ["$scope", function ($scope) {}]);

},{}],11:[function(require,module,exports){
angular.module('myapp').config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when('/contact', {
        name: 'contact',
        templateUrl: 'sample/routes/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'ctrl'
    });
}]);

},{}],12:[function(require,module,exports){
require('./contact-controller');
require('./contact-routes');

},{"./contact-controller":10,"./contact-routes":11}],13:[function(require,module,exports){
angular.module('myapp').controller('HomeController', ["$scope", "orderByFilter", "Politician", "twitterService", "rssService", function ($scope, orderByFilter, Politician, twitterService, rssService) {
    var politicians = Politician.list();

    politicians.$promise.then(function (result) {
        $scope.orderedPoliticians = orderByFilter(result, "-stats.total");

        twitterService.getTweets($scope.orderedPoliticians, 0).then(function (tweets) {
            $scope.latestTweets = tweets;
        });

        rssService.getRss($scope.orderedPoliticians, 0).then(function (rss) {

            for (var i = 0; i < rss.length; i++) {
                var link = rss[i].link;

                if (link.indexOf("www.rte.ie") != -1) {
                    rss[i].thumbnail_url = "https://pbs.twimg.com/profile_images/535035010596630529/3SmYLBeN.png";
                } else if (link.indexOf("feeds.examiner.ie") != -1) {
                    rss[i].thumbnail_url = "https://lh4.ggpht.com/26z1Lo63pZwjRmuK7MCGvlpbCJ4WU83hw1Jo9Xbs7MT4wxNI2dtu9l4WUlFEZ5rO5Go=w300-rw";
                } else if (link.indexOf("irishtimes") != -1) {
                    rss[i].thumbnail_url = "https://dafnisonmusic.com/testimonial/the-irish-times/";
                } else if (link.indexOf("independent") != -1) {
                    rss[i].thumbnail_url = "https://pbs.twimg.com/profile_images/682941663229050880/TpeLdc3V.png";
                } else if (link.indexOf("thejournal") != -1) {
                    rss[i].thumbnail_url = "http://static2.businessinsider.com/image/528a259269bedd796568bc34-100/thejournalie.jpg";
                }
            }

            $scope.latestRss = rss;
        });
    });
}]);

},{}],14:[function(require,module,exports){
angular.module('myapp').config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when('/', {
        name: 'home',
        templateUrl: 'sample/routes/home/home.html',
        controller: 'HomeController',
        controllerAs: 'ctrl'
    });
}]);

},{}],15:[function(require,module,exports){
require('./home-controller');
require('./home-routes');

},{"./home-controller":13,"./home-routes":14}],16:[function(require,module,exports){
require('./home');
require('./rank');
require('./politician');
require('./contact');
require('./about');

angular.module('myapp').run(["$rootScope", "namedRouteService", function ($rootScope, namedRouteService) {
    $rootScope.$on('$routeChangeError', function (ev, current, previous, rejection) {
        if (rejection.status === 404) {
            alert('Not found');
            namedRouteService.open('home');
        }
    });
}]);

},{"./about":9,"./contact":12,"./home":15,"./politician":17,"./rank":20}],17:[function(require,module,exports){
require('./politician-controller');
require('./politician-routes');

},{"./politician-controller":18,"./politician-routes":19}],18:[function(require,module,exports){
angular.module('myapp').controller('PoliticianController', ["$scope", "PoliticianData", "Politician", "twitterService", "rssService", function ($scope, PoliticianData, Politician, twitterService, rssService) {

    var politicianData = new Politician(PoliticianData);

    politicianData.$promise.then(function (result) {

        $scope.politicianData = result;
        $scope.myData = [123, 244, 257];

        var politician = [politicianData];

        twitterService.getTweets(politician, 0).then(function (tweets) {
            $scope.latestTweets = tweets;
        });

        rssService.getRss(politician, 0).then(function (rss) {

            for (var i = 0; i < rss.length; i++) {
                var link = rss[i].link;

                if (link.indexOf("www.rte.ie") != -1) {
                    rss[i].thumbnail_url = "https://pbs.twimg.com/profile_images/535035010596630529/3SmYLBeN.png";
                } else if (link.indexOf("feeds.examiner.ie") != -1) {
                    rss[i].thumbnail_url = "https://lh4.ggpht.com/26z1Lo63pZwjRmuK7MCGvlpbCJ4WU83hw1Jo9Xbs7MT4wxNI2dtu9l4WUlFEZ5rO5Go=w300-rw";
                } else if (link.indexOf("irishtimes") != -1) {
                    rss[i].thumbnail_url = "https://dafnisonmusic.com/testimonial/the-irish-times/";
                } else if (link.indexOf("independent") != -1) {
                    rss[i].thumbnail_url = "https://pbs.twimg.com/profile_images/682941663229050880/TpeLdc3V.png";
                } else if (link.indexOf("thejournal") != -1) {
                    rss[i].thumbnail_url = "http://static2.businessinsider.com/image/528a259269bedd796568bc34-100/thejournalie.jpg";
                }
            }

            $scope.latestRss = rss;
        });
    });
    $scope.myJson = {
        globals: {
            shadow: false,
            fontFamily: "Verdana",
            fontWeight: "100"
        },
        type: "pie",
        backgroundColor: "#fff",

        legend: {
            layout: "x5",
            position: "50%",
            borderColor: "transparent",
            marker: {
                borderRadius: 10,
                borderColor: "transparent"
            }
        },
        tooltip: {
            text: "%v requests"
        },
        plot: {
            refAngle: "-90",
            borderWidth: "0px",
            valueBox: {
                placement: "in",
                text: "%npv %",
                fontSize: "15px",
                textAlpha: 1
            }
        },
        series: [{
            text: "Positive",
            backgroundColor: "#FA6E6E"
        }, {
            text: "Negative",
            backgroundColor: "#D2D6DE"
        }, {
            text: "Neutral",
            backgroundColor: "#28C2D1"
        }]
    };
}]);

},{}],19:[function(require,module,exports){
angular.module('myapp').config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when('/politician/:slug', {
        name: 'politician',
        templateUrl: 'sample/routes/politician/politician.html',
        controller: 'PoliticianController',
        controllerAs: 'ctrl',
        resolve: {
            PoliticianData: ["Politician", "$route", function (Politician, $route) {
                var politicianData = Politician.get({
                    slug: $route.current.params.slug
                });
                return politicianData.$promise;
            }]
        }
    });
}]);

},{}],20:[function(require,module,exports){
require('./rank-controller');
require('./rank-routes');

},{"./rank-controller":21,"./rank-routes":22}],21:[function(require,module,exports){
angular.module('myapp').controller('RankController', ["$scope", "Politician", "orderByFilter", "$location", function ($scope, Politician, orderByFilter, $location) {
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.rankBy = "-stats.total";
    $scope.politicians = Politician.list();

    $scope.politicians.$promise.then(function (result) {
        $scope.politicians = result;
        buildPagination();
        $scope.rank();
        console.log($scope.politicians);
    });

    var getItems = function () {
        var items = $scope.politicians;
        if ($scope.query && $scope.filtered.length > 0) {
            items = $scope.filtered;
        }
        return items;
    };

    var buildPagination = function () {

        $scope.numberOfPages = new Array(Math.ceil(getItems().length / $scope.pageSize));
    };

    $scope.rank = function () {
        $scope.politicians = orderByFilter($scope.politicians, $scope.rankBy);
    };

    $scope.changePage = function (page) {
        if (page >= 0 && page <= getItems().length / $scope.pageSize) {
            $scope.currentPage = page;
        }
    };

    $scope.go = function (politician) {
        $location.path('/politician/' + politician.slug);
    };

    $scope.search = function (item) {
        var found = false;
        var fullName = item.first_name + " " + item.last_name;
        if (!$scope.query || item.first_name.toLowerCase().indexOf($scope.query.toLowerCase()) != -1 || item.last_name.toLowerCase().indexOf($scope.query.toLowerCase()) != -1 || fullName.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) {

            found = true;
        }

        buildPagination();

        return found;
    };

    $scope.hasNext = function () {
        return $scope.currentPage >= getItems().length / $scope.pageSize - 1;
    };
}]);

},{}],22:[function(require,module,exports){
angular.module('myapp').config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when('/rank', {
        name: 'rank',
        templateUrl: 'sample/routes/rank/rank.html',
        controller: 'RankController',
        controllerAs: 'ctrl'
    });
}]);

},{}],23:[function(require,module,exports){
angular.module('myapp').service('client', ["esFactory", "$location", function (esFactory, $location) {
    return esFactory({
        host: $location.host() + ':9200'
    });
}]);

},{}],24:[function(require,module,exports){
require('./client-service');
require('./search-service');
require('./twitter-service');
require('./rss-service');

},{"./client-service":23,"./rss-service":25,"./search-service":26,"./twitter-service":27}],25:[function(require,module,exports){
angular.module('myapp').factory('rssService', ['searchService', function (searchService) {

  var factory = {};

  factory.getRss = function (politicians, offset) {
    var query = { "bool": { "should": [] } };

    var matchPlaceholder = { "match": { "description": { "query": "", "operator": "and" }
      }
    };

    var matches = [];

    for (var i = 0; i < politicians.length; i++) {
      var match = angular.copy(matchPlaceholder);
      match.match.description.query = politicians[i].first_name + " " + politicians[i].last_name;
      matches.push(match);
    }
    query.bool.should = matches;

    var sort = { "published": { "order": "desc" } };

    return searchService.search(query, offset, 10, "rss", "rss", sort);
  };

  return factory;
}]);

},{}],26:[function(require,module,exports){
angular.module('myapp').factory('searchService', ['$q', 'client', function ($q, client) {

  var factory = {};

  factory.search = function (query, offset, size, index, type, sort) {
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
    }).then(function (result) {
      var ii = 0,
          hits_in,
          hits_out = [];

      hits_in = (result.hits || {}).hits || [];

      for (; ii < hits_in.length; ii++) {
        var object = hits_in[ii]._source;
        hits_out.push(object);
      }

      deferred.resolve(hits_out);
    }, deferred.reject);

    return deferred.promise;
  };

  return factory;
}]);

},{}],27:[function(require,module,exports){
angular.module('myapp').factory('twitterService', ['searchService', function (searchService) {

  var factory = {};

  factory.getTweets = function (politicians, offset) {
    var query = { "bool": { "should": [] } };

    var matchPlaceholder = { "match": { "message": { "query": "", "operator": "and" }
      }
    };

    var matches = [];

    for (var i = 0; i < politicians.length; i++) {
      var match = angular.copy(matchPlaceholder);
      match.match.message.query = politicians[i].first_name + " " + politicians[i].last_name;
      matches.push(match);
    }
    query.bool.should = matches;

    var sort = { "date": { "order": "desc" } };

    return searchService.search(query, offset, 10, "twitter", "tweet", sort);
  };

  return factory;
}]);

},{}]},{},[1]);

//# sourceMappingURL=maps/app.js.map
