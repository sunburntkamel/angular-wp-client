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
  .config(function ($stateProvider, $urlRouterProvider) {
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
      });
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
    posts.get({
      type: 'jetpack-portfolio'
    }, function(res) {
      $scope.items = res.posts;
      $scope.nextPage = res.meta.next_page;
    });
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
    return $resource(DOMAIN_URL.wordpress+'/sites/:site/posts/:post_id', {
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
 * Controller of the angularWpClientApp
 */
angular.module('angularWpClientApp')
  .controller('ApplicationcontrollerCtrl', function ($scope, $state) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.uiRouterState = $state;$scope.message = {
      text: '',
      status: ''
    };
    $scope.viewName = '';
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
    $scope.tmpObj = {
      id: 0,
      type: '',
      object: ''
    };
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
    posts.get({
      post_id: $stateParams.post_id
    }, function(res) {
      $scope.post = res;
    });
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
