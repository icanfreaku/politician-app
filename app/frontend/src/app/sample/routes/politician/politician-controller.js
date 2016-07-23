angular.module('myapp')
    .controller('PoliticianController', function($scope, PoliticianData, Politician, twitterService, rssService) {

        var politicianData = new Politician(PoliticianData);



        politicianData.$promise.then(function (result) {

            $scope.politicianData = result;
            $scope.myData = [123,244,257];

            var politician = [politicianData];

            twitterService.getTweets(politician, 0).then( function (tweets) {
                $scope.latestTweets = tweets;
            });

            rssService.getRss(politician, 0).then( function (rss) {

                for (var i=0; i<rss.length; i++) {
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

                $scope.latestRss= rss;

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
                                                textAlpha: 1,
                                            }
                                        },
                                        series: [{
                                            text: "Positive",
                                            backgroundColor: "#FA6E6E",
                                        }, {
                                            text: "Negative",
                                            backgroundColor: "#D2D6DE"
                                        }, {
                                            text: "Neutral",
                                            backgroundColor: "#28C2D1"
                                        }]
                                    };






     });
