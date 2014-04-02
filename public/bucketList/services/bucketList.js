'use strict';

//BucketList service used for bucketList REST endpoint
angular.module('mean.bucketList').factory('BucketList', ['$resource', function($resource) {
    return $resource('bucketList');
}]);
