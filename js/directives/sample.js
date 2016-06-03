/* global define */
'use strict';

define([], function() {
	return ['sampleDirective', function() {
		return {
			restrict: 'E',
			replace: 'true',
			templateUrl: 'partials/directives/sample.html',
			scope: {
				data: '=dData'
			},
			controller: ['$scope', function($scope) {

			}],
			link: function(scope) {
				// setTimeout(function() {
				// 	$('#compareTableList').mCustomScrollbar({
				// 		theme: 'minimal-dark'
				// 	});
				// }, 10);
				// $('#mCSB_3_container').addClass('timeTable');
			}
		};
	}];
});
