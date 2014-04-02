'use strict';

angular.module('mean.bucketList').controller('BucketListController', ['$scope', '$stateParams', '$location', 'Global','BucketList', function ($scope, $stateParams, $location, Global,BucketList) {
    $scope.global = Global;

    $scope.create = function() {
        var bucketList = new BucketList({
            title: this.title,
            description: this.description
        });
        bucketList.$save(function(response) {
            $location.path('/bucketList');
        });
    };

    $scope.getAllBucketList = function() {
        BucketList.query(function(bucketList) {
            $scope.bucketList = bucketList;
        });
    };
}]);
