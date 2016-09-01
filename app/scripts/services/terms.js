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
