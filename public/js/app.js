var app = angular.module('Instagram', ['ngRoute', 'ngMessages', 'satellizer']);

app.config(function($routeProvider, $locationProvider, $authProvider){

  $routeProvider
  .when('/', {
    templateUrl: '/partials/home.html',
    // controller: 'HomeCtrl'
  })
  .when('/login', {
    templateUrl: '/partials/login.html',
    controller: 'LoginCtrl'
  })
  .when('/signup', {
      templateUrl: '/partials/signup.html',
    // controller: 'SignupCtrl'
  })
  .when('/detail', {
      templateUrl: '/partials/detail.html',
    // controller: 'DetailCtrl'
  })
  .otherwise({
    redirectTo:'/'
  });
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: ('/')
  // });
$authProvider.loginUrl = 'http://localhost:3000/auth/login';
$authProvider.signupUrl = 'http://localhost:3000/auth/signup';
$authProvider.oauth2({
  name: 'instagram',
  url: 'http://localhost:3000/auth/instagram',
  redirectUri: 'http://localhost:8000',
  clientId: '459c164ad61f45cfa404bf889db54370',
  requiredUrlParams: ['scope'],
  scope: ['likes'],
  scopeDelimiter: '+',
  authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
});
})
