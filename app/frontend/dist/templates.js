(function(module) {
try {
  module = angular.module('myapp');
} catch (e) {
  module = angular.module('myapp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sample/routes/contact/contact.html',
    '<h1>Contact</h1>');
}]);
})();

(function(module) {
try {
  module = angular.module('myapp');
} catch (e) {
  module = angular.module('myapp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sample/routes/about/about.html',
    '<div class="container">\n' +
    '    <div class="row">\n' +
    '        <div class="col-sm-12 mainContent">\n' +
    '            <div class="col-sm-12">\n' +
    '                <h1 class="page-header text-left">\n' +
    '                About the Project\n' +
    '            </h1>\n' +
    '                <p class="lead text-justify">\n' +
    '                    This project is a part of the final semester for MSC Student NL programme for the year 2015/2016. The vision of this project is to collect and analyze news and social networks to provide a linked information and a rank of Irish politicians by popularity and sentiment Analysis. In this project we are ranking the Politicians in different parameters such as</p>\n' +
    '                <ul class="text-left lead">\n' +
    '                    <li>Based on Popularity</li>\n' +
    '\n' +
    '                    <li>Based on Positive sentiment</li>\n' +
    '\n' +
    '                    <li>Based on Negative sentiment</li>\n' +
    '\n' +
    '                    <li>Based on neutral sentiment</li>\n' +
    '\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '            <div class="row ">\n' +
    '                <div class="col-sm-12 " id="why-content ">\n' +
    '                    <h1 class="page-header text-left ">Why Does System Exist </h1>\n' +
    '                    <p class="lead text-justify ">\n' +
    '                        The main problem we are willing to solve is to bring information from different sources into one place where our users can have it in an interesting, meaningful and easy way to consume. Our solution is not just for gathering information about the overall politics, it is meant to link this information to each individual politician. Thus, users can compare and keep track of the individual politician actions in the government. In this matter, our system has been designed to use this linked information in an interesting way which will be the rank of politicians.\n' +
    '                    </p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="row " id="team ">\n' +
    '                <div class="col-sm-12 text-left ">\n' +
    '                    <h1 class="page-header ">Our Team</h1>\n' +
    '                </div>\n' +
    '                <div class="col-lg-4 col-sm-6 ">\n' +
    '                    <img class="img-circle img-responsive img-center " src="../../../../../../media/arun1.jpg " alt="Arun Image " />\n' +
    '                    <h3 class="text-left ">Arun Kumar Kishore <br>\n' +
    '            </h3>\n' +
    '                </div>\n' +
    '                <div class="col-lg-4 col-sm-6 ">\n' +
    '                    <img class="img-circle img-responsive img-center " src="../../../../../../media/faisal.jpg " alt="Faisal Image " />\n' +
    '                    <h3 class="text-left ">Mohd Faisal Raza <br>\n' +
    '            </h3>\n' +
    '                </div>\n' +
    '                <div class="col-lg-4 col-sm-6 ">\n' +
    '                    <img class="img-circle img-responsive img-center " src="../../../../../../media/tuxpi.com.1468865486.jpg " alt=" " />\n' +
    '                    <h3 class="text-left ">Rodrigo Serviuc Pavezi <br>\n' +
    '            </h3>\n' +
    '                </div>\n' +
    '                <div class="col-lg-4 col-sm-6 ">\n' +
    '                    <img class="img-circle img-responsive img-center " src="../../../../../../media/sohaib.jpg " alt="Sohaib Image " />\n' +
    '                    <h3 class="text-left ">Sohaib Ahmad <br>\n' +
    '            </h3>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="col-lg-4 col-sm-6 ">\n' +
    '                    <img class="img-circle img-responsive img-center " src="../../../../../../media/sumitha.jpg" width="120px" height="120px" alt="sumitha image " />\n' +
    '                    <h3 class="text-left">Sumita Dhanasekaran<br>\n' +
    '            </h3>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('myapp');
} catch (e) {
  module = angular.module('myapp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sample/routes/home/home.html',
    '<div class="row content">\n' +
    '    <div class="col-sm-12">\n' +
    '        <div class="row slideshow" >\n' +
    '            <div class="col-sm-12">\n' +
    '                <!-- <div class="jumbotron">\n' +
    '                  <h1>Politician 360</h1>\n' +
    '                  <p>Where you can find current, meaningful and interesting information about your politicians. Look around and have fun!!</p>\n' +
    '                </div> --> \n' +
    '                <div id="header-slider" class="carousel slide" data-ride="carousel">\n' +
    '                    <ol class="carousel-indicators">\n' +
    '                        <li data-target="#header-slider" data-slide-to="0" class="active"></li>\n' +
    '                        <li data-target="#header-slider" data-slide-to="1"></li>\n' +
    '                        <li data-target="#header-slider" data-slide-to="2"></li>\n' +
    '\n' +
    '                    </ol>\n' +
    '                    <div class="carousel-inner" role="listbox">\n' +
    '\n' +
    '                        <!--                       image 1 on the slider-->\n' +
    '                        <div class="item active">\n' +
    '                            <img src="../../../../../../media/flag1.jpg" alt="Irish Flag" />\n' +
    '                            <div class="carousel-caption">\n' +
    '                                <h3>Ireland politics at a Glance</h3>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <!--                        image2 on the slider-->\n' +
    '                        <div class="item">\n' +
    '                            <img src="../../../../../../media/image4.jpg" alt="Irish Flag" />\n' +
    '                            <div class="carousel-caption">\n' +
    '                                <h3>Team-Politician 360</h3>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <!--                        image3 on the slider-->\n' +
    '                        <div class="item">\n' +
    '                            <img src="../../../../../../media/imageSlider.jpg" alt="Irish Flag" />\n' +
    '                            <div class="carousel-caption">\n' +
    '                                <h3>All at one place</h3>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <a href="#header-slider" class="left carousel-control" role="button" data-slide="prev">\n' +
    '                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\n' +
    '                    </a>\n' +
    '\n' +
    '                    <a href="#header-slider" class="right carousel-control" role="button" data-slide="next">\n' +
    '                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\n' +
    '                    </a>\n' +
    '                </div>  \n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="row news">\n' +
    '            <div class="col-sm-4">\n' +
    '                <div class="panel panel-default">\n' +
    '                  <div class="panel-heading">Latest News Articles</div>\n' +
    '                    <div class="panel-body">\n' +
    '                        <div class="list-group text-left">\n' +
    '                            <a href="{{rss.link}}" class="list-group-item" ng-repeat="rss in latestRss" target="_blank" >\n' +
    '                                <img class="thumbnail" ng-src="{{rss.thumbnail_url}}"/>\n' +
    '                                <span>{{rss.title}}</span>\n' +
    '                            </a>\n' +
    '                        </div>      \n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="col-sm-4">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">Latest Tweets</div>\n' +
    '                    <div class="panel-body">\n' +
    '                        <div class="list-group text-left">\n' +
    '                            <a href="https://twitter.com/statuses/{{tweet.id}}" class="list-group-item" ng-repeat="tweet in latestTweets" target="_blank" >\n' +
    '                                <img class="thumbnail" ng-src="{{tweet.picture_url}}" fallback-src="{{\'https://abs.twimg.com/sticky/default_profile_images/default_profile_0_400x400.png\'}}"/>\n' +
    '                                <span>{{tweet.message}}</span>\n' +
    '                            </a>\n' +
    '                        </div>      \n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="col-sm-4">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">Top 10 most popular politicians</div>\n' +
    '                    <div class="panel-body">\n' +
    '                        <div class="list-group text-left">\n' +
    '                            <a href="/politician/{{politician.slug}}" class="list-group-item" ng-repeat="politician in orderedPoliticians | limitTo:10">\n' +
    '                                <span class="badge pull-left">{{$index+1}}</span>\n' +
    '                                <img class="thumbnail" ng-src="{{politician.photo_url}}" fallback-src="{{\'http://findicons.com/files/icons/703/artists_valley_sample/128/business_man_blue.png\'}}" ng-if="politician.photo_url"/>\n' +
    '                                <img class="thumbnail" src="http://findicons.com/files/icons/703/artists_valley_sample/128/business_man_blue.png" ng-if="!politician.photo_url"></span>\n' +
    '                                <span>{{politician.first_name}} {{politician.last_name}}</span>\n' +
    '                            </a>\n' +
    '                            <div class="text-right see-more">\n' +
    '                                <a href="/rank">See more...</a>\n' +
    '                            </div>\n' +
    '                        </div>    \n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>    \n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>  \n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('myapp');
} catch (e) {
  module = angular.module('myapp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sample/routes/politician/politician.html',
    '<div class="content-wrapper bg-orange">\n' +
    '  <div class="col-xs-12 candidates-header">\n' +
    '  </div>\n' +
    '  </div>\n' +
    '<div class="content-wrapper bg-grey-white" align="left">\n' +
    '  <div class="container">\n' +
    '    <div class="col-xs-12 container single-candidate">\n' +
    '      <h1><font color="#FF8000">Candidate</font></h1>\n' +
    '      <div class="col-md-4">\n' +
    '        <div class="candidate-pic">\n' +
    '          <img class="thumbnail" ng-src="{{politicianData.photo_url}}" fallback-src="{{\'http://findicons.com/files/icons/703/artists_valley_sample/128/business_man_blue.png\'}}" ng-if="politicianData.photo_url"/>\n' +
    '          <img class="thumbnail" src="http://findicons.com/files/icons/703/artists_valley_sample/128/business_man_blue.png" ng-if="!politicianData.photo_url"></span>\n' +
    '        </div>\n' +
    '        <div class="candidate-details">\n' +
    '          <h4>Name</h4>\n' +
    '          <h5>{{politicianData.first_name}} {{politicianData.last_name}}</h5>\n' +
    '          <h4>Gender</h4>\n' +
    '          <h5>{{politicianData.gender}}</h5>\n' +
    '        	  </div>\n' +
    '      </div>\n' +
    '      <div class="col-md-4">\n' +
    '        <h4>Party</h4>\n' +
    '        <h5>{{politicianData.party}}</h5>\n' +
    '        <h4>Constituency</h4>\n' +
    '        <h5>{{politicianData.constituency}}</h5>\n' +
    '        <h4>Official Party Website</h4>\n' +
    '        <h5><a href="{{politicianData.party_profile_url}}">{{polticianData.party}}</a></h5>\n' +
    '\n' +
    '      </div>\n' +
    '      <div class="col-md-4 candidate-contacts">\n' +
    '        <h4>Contact</h4>\n' +
    '        <h5>t: <a href="{{politicianData.phone_1}}">{{politicianData.phone_2}}</a></h5>\n' +
    '        <h5>t: <a href="{{politicianData.phone_2}}"></a>{{politicianData.phone_2}}</h5>\n' +
    '        <h5>e: <a href="mailto:{{politicianData.email}}">{{politicianData.email}}</a></h5>\n' +
    '        <h5>w: <a href="{{politicianData.website_url}}">{{politicianData.website_url}}</a></h5>\n' +
    '        <h4>Social</h4>\n' +
    '				<div class="socicon">\n' +
    '					<ul class="socicon-list">\n' +
    '						<li><a style="text-decoration: none" class="socicon-twitter" href="{{politicianData.twitter_url}}"></a></li>\n' +
    '    				<li><a style="text-decoration: none" class="socicon-facebook" href="{{politicianData.facebook_url}}"></a>&nbsp;</li>\n' +
    '    				<li><a style="text-decoration: none" class="socicon-linkedin" href="{{polticianData.linkedin_url}}"></a>&nbsp;</li>\n' +
    '    				<li><a style="text-decoration: none" class="socicon-youtube" href="{{polticianData.youtube_url}}"></a>&nbsp;</li>\n' +
    '    				<li><a style="text-decoration: none" class="socicon-instagram" href="{{politicianData.instagram_url}}"></a></li>\n' +
    '       		</ul>\n' +
    '		  	</div>\n' +
    '			</div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '      <div class="col-sm-12">\n' +
    '        <zingchart id="chart-1" zc-values="myData" zc-json="myJson" zc-width="100%" zc-height="568px"></zingchart>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '		<div class="row">\n' +
    '					<div class="col-sm-4">\n' +
    '							<div class="panel panel-default">\n' +
    '								<div class="panel-heading">News Articles</div>\n' +
    '								  <div class="panel-body">\n' +
    '                      <div class="list-group text-left">\n' +
    '                          <a href="{{rss.link}}" class="list-group-item" ng-repeat="rss in latestRss" target="_blank" >\n' +
    '                              <img class="thumbnail" ng-src="{{rss.thumbnail_url}}"/>\n' +
    '                              <span>{{rss.title}}</span>\n' +
    '                          </a>\n' +
    '                      </div>\n' +
    '                  </div>\n' +
    '							</div>\n' +
    '					</div>\n' +
    '					<div class="col-sm-4">\n' +
    '							<div class="panel panel-default">\n' +
    '									<div class="panel-heading">Tweets</div>\n' +
    '									  <div class="panel-body">\n' +
    '                        <div class="list-group text-left">\n' +
    '                            <a href="https://twitter.com/statuses/{{tweet.id}}" class="list-group-item" ng-repeat="tweet in latestTweets" target="_blank" >\n' +
    '                                <img class="thumbnail" ng-src="{{tweet.picture_url}}" fallback-src="{{\'https://abs.twimg.com/sticky/default_profile_images/default_profile_0_400x400.png\'}}"/>\n' +
    '                                <span>{{tweet.message}}</span>\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '							</div>\n' +
    '					</div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('myapp');
} catch (e) {
  module = angular.module('myapp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sample/routes/rank/rank.html',
    '<div class="row content rank">\n' +
    '    <div class="col-sm-12" >\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-12">\n' +
    '                <div>\n' +
    '                    <nav class="navbar navbar-default">\n' +
    '                        <div class="container-fluid">\n' +
    '                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n' +
    '                                <form class="navbar-form navbar-left" role="search">                      \n' +
    '                                    <div class="form-group rankby">\n' +
    '                                        <label for="rankBy">Rank by</label>\n' +
    '                                        <select class="form-control" id="rankBy" ng-model="rankBy" ng-change="rank()">\n' +
    '                                            <option value="-stats.total">Popularity</option>\n' +
    '                                            <option value="-stats.total_negative">Negative Sentiment</option>\n' +
    '                                            <option value="-stats.total_positive">Positive Sentiment</option>\n' +
    '                                            <option value="-stats.total_neutral">Neutral Sentiment</option>\n' +
    '                                        </select>\n' +
    '                                    </div>\n' +
    '                                    <div class="form-group search">\n' +
    '                                      <input type="text" class="form-control" placeholder="Search by name" ng-model="query">\n' +
    '                                    </div>\n' +
    '                                </form>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                      </div>\n' +
    '                    </nav>\n' +
    '                    \n' +
    '                </div>\n' +
    '\n' +
    '            </div>    \n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-12">\n' +
    '                <div class="table-responsive rankTable">\n' +
    '                    <table class="table text-left table-hover table-striped table-bordered table-condensed">\n' +
    '                        <thead>\n' +
    '                          <tr>\n' +
    '                            <th>Rank #</th>\n' +
    '                            <th>Politician</th>\n' +
    '                            <th>Total Number of Mentions</th>\n' +
    '                            <th>Total Number of Tweets</th>\n' +
    '                            <th>Total Number of Articles</th>\n' +
    '                            <th>Negative</th>\n' +
    '                            <th>Positive</th>\n' +
    '                            <th>Neutral</th>\n' +
    '                          </tr>\n' +
    '                        </thead>\n' +
    '                        <tbody class="body">\n' +
    '                          <tr ng-repeat="politician in politicians | startFrom:currentPage*pageSize | filter: search | limitTo:pageSize  as filtered" ng-click="go(politician)">  \n' +
    '                            <td><span class="badge pull-left">{{politicians.indexOf(politician)+1}}</span></td>\n' +
    '                            <td>\n' +
    '                                <img class="thumbnail" ng-src="{{politician.photo_url}}" fallback-src="{{\'http://findicons.com/files/icons/703/artists_valley_sample/128/business_man_blue.png\'}}" ng-if="politician.photo_url"/>\n' +
    '                                <img class="thumbnail" src="http://findicons.com/files/icons/703/artists_valley_sample/128/business_man_blue.png" ng-if="!politician.photo_url"></span>\n' +
    '                                <span>{{politician.first_name}} {{politician.last_name}}</span>\n' +
    '                            </td>\n' +
    '                            <td>{{politician.stats.total}}</td>\n' +
    '                            <td>{{politician.stats.twitter.total}}</td>\n' +
    '                            <td>{{politician.stats.rss.total}}</td>\n' +
    '                            <td>{{politician.stats.total_negative}}</td>\n' +
    '                            <td>{{politician.stats.total_positive}}</td>\n' +
    '                            <td>{{politician.stats.total_neutral}}</td>\n' +
    '                          </tr>\n' +
    '                        </tbody>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '                <nav>\n' +
    '                  <ul class="pagination pagination-lg">\n' +
    '                    <li ng-class="{\'disabled\': currentPage==0}">\n' +
    '                      <a ng-click="changePage(currentPage-1);" aria-label="Previous">\n' +
    '                        <span aria-hidden="true">&laquo;</span>\n' +
    '                      </a>\n' +
    '                    </li>\n' +
    '                    <li ng-repeat="i in numberOfPages track by $index" ng-class="{\'active\': currentPage==$index}"><a ng-click="changePage($index);">{{$index+1}}</a></li>\n' +
    '                    <li ng-class="{\'disabled\': hasNext()}">\n' +
    '                      <a ng-click="changePage(currentPage+1);" aria-label="Next">\n' +
    '                        <span aria-hidden="true">&raquo;</span>\n' +
    '                      </a>\n' +
    '                    </li>\n' +
    '                  </ul>\n' +
    '                </nav>  \n' +
    '            </div>    \n' +
    '        </div>    \n' +
    '    </div>    \n' +
    '</div>\n' +
    '   \n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '');
}]);
})();
