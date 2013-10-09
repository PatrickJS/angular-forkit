;(function (__global, angular) {
  'use strict';

  if (!angular) {
    throw new Error('window.angular is not defined.');
  }
  
  angular.module('angular-forkit', [])
    .directive('forkit', ['$parse', function($parse) {
      return function(scope, element, attr) {

      };
    }]);

}(window, angular));
