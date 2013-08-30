;(function (__global, angular) {
  'use strict';

  if (!angular) {
    throw new Error('window.angular is not defined.');
  }
  var module = angular.module('forkit', []);
  module.directive('forkit', ['$parse', function($parse) {
    return function(scope, element, attr) {

    };
  }]);

}(window, angular));
