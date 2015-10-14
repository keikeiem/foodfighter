var foodfighterApp = angular.module('foodfighterApp', []);

foodfighterApp.controller('ListControl', function($scope){
	$scope.lunch = [	                
	                 {'name' : '장수 손두부', 'food' : '고추장 두부찌개'},
	                 {'name' : '고향식당', 'food' : '제육볶음'},
	                 {'name' : '초밥집', 'food' : '회덮밥'},
	                 {'name' : '겉절이 돈까스', 'food' : '겉절이 돈까스'},
	                 {'name' : '큐브 아고라', 'food' : 'Good Luck'},
	                 {'name' : '귀신 반점', 'food' : '볶음밥'},
	                 {'name' : '명가 도시락', 'food' : '제육덮밥'},
	                 {'name' : '죽 이야기', 'food' : '호박죽'}
                 ];
	$scope.dinner = [
		                 {'name' : '사가네 만두'},
		                 {'name' : '78온더라이즈'},
		                 {'name' : '중화요리 외객'},
		                 {'name' : '돈웨이 돈까스'},
		                 {'name' : '김가네 김밥'},
		                 {'name' : '장수 손두부'},
		                 {'name' : '남원 추어탕'},
		                 {'name' : '오신정'},
	                 ];                
});