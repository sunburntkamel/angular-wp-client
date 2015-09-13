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
