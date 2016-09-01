angular.module('config', [])

.constant('ENV', 'production')

.constant('DOMAIN_URL', {rest:'https://public-api.wordpress.com/rest/v1.1',oauth:'https://public-api.wordpress.com/oauth2'})

.constant('CLIENT_SECRET', {site:'sunburntkamel.wordpress.com'})

;