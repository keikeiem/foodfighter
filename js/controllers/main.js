/* global define */
'use strict';

define([], function() {
	/**
	* 컨트롤러 선언
	* @method _controller
	* @param {object} $scope - $scope
	*/
	function _controller($scope) {
		$scope.title = ['Application Summary'];
		// CSS 설정
		$scope.$emit('updateCSS', ['css/main.css']);
	}
	// 생성한 컨트롤러 리턴
	return _controller;
});
