'use strict';

angular.module('classroomApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

//wanted place/time
var wtime=0;
var wbuilding=0;
var wday=0;
var wduration=0;


function gatherData($scope)	{
	this.wtime=$scope.seacrhTime;
	this.wbuilding=building;
	
	//searchTime();
		
}

function searchTime(){




}

function resultInfo(){
	$scope.result=wtime;





}








