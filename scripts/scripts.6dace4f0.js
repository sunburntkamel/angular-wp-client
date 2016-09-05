'use strict';

/**
 * @ngdoc overview
 * @name angularWpClientApp
 * @description
 * # angularWpClientApp
 *
 * Main module of the application.
 */
angular
  .module('angularWpClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'config'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('single', {
        url: '/p/:post_id/:slug',
        templateUrl: 'views/single.html',
        controller: 'SingleCtrl'
      })
      .state('term', {
        url: '/term/:taxonomy/:term',
        templateUrl: 'views/term.html',
        controller: 'TermCtrl'
      })
    ;
    $urlRouterProvider.otherwise('/');

  })
  .filter('thumb', function() {
    return function(i, w, h, crop) {
      return i+'?w='+w+'&h='+h+'&crop='+crop;
    };
  })
;

'use strict';

/**
 * @ngdoc function
 * @name angularWpClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWpClientApp
 */
angular.module('angularWpClientApp')
  .controller('MainCtrl', function ($scope, posts) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.meta.img = 'https://sunburntkamel.files.wordpress.com/2010/07/cropped-294195815_12efa97007_o.jpg';
    $scope.meta.pageTitle = 'Hi, I&#8217;m Amie';
    $scope.getTermPosts = posts.get;
  });

'use strict';

/**
 * @ngdoc function
 * @name angularWpClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularWpClientApp
 */
angular.module('angularWpClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc service
 * @name angularWpClientApp.posts
 * @description
 * # posts
 * Service in the angularWpClientApp.
 */
angular.module('angularWpClientApp')
  .service('posts', function ($resource, DOMAIN_URL, CLIENT_SECRET) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(DOMAIN_URL.rest+'/sites/:site/posts/:post_id', {
      site: CLIENT_SECRET.site,
      post_id: '@post_id',
      context: '@context',
      http_envelope: '@http_envelope',
      pretty: '@pretty',
      meta: '@meta',
      fields: '@fields',
      callback: '@callback',
      number: '@number',
      offset: '@offset',
      page: '@page',
      page_handle: '@page_handle',
      order: '@order',
      order_by: '@order_by',
      after: '@after',
      before: '@before',
      modified_after: '@modified_after',
      modified_before: '@modified_before',
      tag: '@tag',
      category: '@category',
      type: '@type',
      parent_id: '@parent_id',
      exclude: '@exclude',
      exclude_tree: '@exclude_tree',
      status: '@status',
      sticky: '@sticky',
      author: '@author',
      search: '@search',
      meta_key: '@meta_key',
      meta_value:'@meta_value'
    });
  });

'use strict';

/**
 * @ngdoc function
 * @name angularWpClientApp.controller:ApplicationcontrollerCtrl
 * @description
 * # ApplicationcontrollerCtrl
 * Global controller, sets $scope vars and functions for passing data between states.
 */
angular.module('angularWpClientApp')
  .controller('ApplicationcontrollerCtrl', function ($scope, $state, terms) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.uiRouterState = $state;
    $scope.navMenu = [
      {
        id: 843,
        icon: 'fa-list',
        name: 'Resume'
      }
    ];
    $scope.message = {
      text: '',
      status: ''
    };
    $scope.viewName = '';
    $scope.terms = {
      jetpackPortfolioType: {},
      jetpackPortfolioTag: {}
    };
    $scope.clearMsg = function() {
      $scope.message = {
        text: '',
        status: ''
      };
    };
    $scope.messageClass = function(messageStatus) {
      var messageClasses = '';
      if (messageStatus==='error'){
        messageClasses += 'bg-danger text-danger';
      }
      if (messageStatus==='success') {
        messageClasses += 'bg-success text-success';
      }
      return messageClasses;
    };
    $scope.meta = {
      pageTitle: 'Hi, I&#8217;m Amie',
      img: 'https://sunburntkamel.files.wordpress.com/2010/07/cropped-294195815_12efa97007_o.jpg'
    };
    $scope.tmpObj = {
      id: 0,
      type: '',
      object: ''
    };
    terms.get({
      taxonomy: 'jetpack-portfolio-type'
    })
      .$promise
      .then(function(res) {
        for (var i in res.terms) {
          var term = res.terms[i];
          $scope.terms.jetpackPortfolioType[term.slug] = term;
        }
      });
    terms.get({
      taxonomy: 'jetpack-portfolio-tag'
    })
      .$promise
      .then(function(res) {
        for (var i in res.terms) {
          var term = res.terms[i];
          $scope.terms.jetpackPortfolioTag[term.slug] = term;
        }
      });
    $scope.copyright = new Date().getFullYear();
  });

'use strict';

/**
 * @ngdoc function
 * @name angularWpClientApp.controller:SingleCtrl
 * @description
 * # SingleCtrl
 * Controller of the angularWpClientApp
 */
angular.module('angularWpClientApp')
  .controller('SingleCtrl', function ($scope, posts, $stateParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.attachArray = [];
    $scope.terms = {};
    $scope.featuredImage = -1;
    posts.get({
      post_id: $stateParams.post_id
    }, function(res) {
      $scope.post = res;
      $scope.meta.pageTitle = res.title;
      if (res.hasOwnProperty('post_thumbnail')) {
        $scope.meta.img = res.post_thumbnail.URL;
      }
      // need attachments in an array to do next/prev
      for (var key in res.attachments){
        $scope.attachArray.push(res.attachments[key]);
      }
      console.log($scope.attachArray);
      if (res.attachment_count === 1) {
        $scope.featuredImage = 0;
      }
    });
    $scope.showFeatImage = function(arrayPos) {
      $scope.featuredImage = arrayPos;
    };
  });

'use strict';

/**
 * @ngdoc service
 * @name angularWpClientApp.categories
 * @description
 * # categories
 * Service in the angularWpClientApp.
 */
angular.module('angularWpClientApp')
  .service('categories', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });

'use strict';

/**
 * @ngdoc service
 * @name angularWpClientApp.tags
 * @description
 * # tags
 * Service in the angularWpClientApp.
 */
angular.module('angularWpClientApp')
  .service('tags', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });

'use strict';

/**
 * @ngdoc directive
 * @name angularWpClientApp.directive:navMenu
 * @description
 * # navMenu
 */
angular.module('angularWpClientApp')
  .directive('navMenu', function () {
    return {
      templateUrl: '/views/nav-menu.html',
      restrict: 'E'
    };
  });

'use strict';

/**
 * @ngdoc service
 * @name angularWpClientApp.terms
 * @description
 * # terms
 * Service in the angularWpClientApp.
 */
angular.module('angularWpClientApp')
  .service('terms', function ($resource, DOMAIN_URL, CLIENT_SECRET) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(DOMAIN_URL.rest+'/sites/:site/taxonomies/:taxonomy/terms', {
      site: CLIENT_SECRET.site,
      taxonomy: '@taxonomy'
    });
  });

'use strict';

/**
 * @ngdoc function
 * @name angularWpClientApp.controller:TermCtrl
 * @description
 * # TermCtrl
 * Controller of the angularWpClientApp
 */
angular.module('angularWpClientApp')
  .controller('TermCtrl', function ($scope, $stateParams, posts) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('termCtrl');
    $scope.term = $scope.terms.jetpackPortfolioType[$stateParams.term];
    $scope.getTermPosts = function(taxonomy, term) {
      console.log('getTermPosts '+taxonomy+' '+term);
      var termKey = 'term['+taxonomy+']';
      var requestObj = {
        type: 'jetpack-portfolio'
      };
      requestObj[termKey] = term;
      posts.get(requestObj, function(res) {
          $scope.termPageItems = res.posts;
          console.log(res);
      });
    };
    // init
    $scope.getTermPosts($stateParams.taxonomy, $stateParams.term);
  });

'use strict';

/**
 * @ngdoc directive
 * @name angularWpClientApp.directive:termList
 * @description
 * # termList
 */
angular.module('angularWpClientApp')
  .directive('termList', function () {
    return {
      templateUrl: '/views/term-list.html',
      restrict: 'E',
      scope: {
        term: '@'
      },
      link: function (scope, element, attrs) {
        scope.$watch(
        function(scope) {
          return scope.$eval(attrs.term);
        }, function(){
            scope.$parent.getTermPosts({
              type: 'jetpack-portfolio',
              number: 4,
              'term[jetpack-portfolio-type]': attrs.term
          }, function(res) {
            scope.termItems = res;
          });
        });
      }
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name angularWpClientApp.controller:TermlistCtrl
 * @description
 * # TermlistCtrl
 * Controller of the angularWpClientApp
 */
angular.module('angularWpClientApp')
  .controller('TermlistCtrl', function ($scope, posts) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.getPosts = function(term) {
      console.log('getPosts '+term);
      posts.get({
        type: 'jetpack-portfolio',
        term: term
      })
        .$promise
        .then(function(res) {
          $scope.items = res;
        });
    };
  });

'use strict';

/**
 * @ngdoc service
 * @name angularWpClientApp.token
 * @description
 * # token
 * Service in the angularWpClientApp.
 */
angular.module('angularWpClientApp')
  .service('token', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });

'use strict';

/**
 * @ngdoc service
 * @name angularWpClientApp.authorize
 * @description
 * # authorize
 * Service in the angularWpClientApp.
 */
angular.module('angularWpClientApp')
  .service('authorize', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });

'use strict';

/**
 * @ngdoc service
 * @name angularWpClientApp.authenticate
 * @description
 * # authenticate
 * Service in the angularWpClientApp.
 */
angular.module('angularWpClientApp')
  .service('authenticate', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
