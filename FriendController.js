



app.controller('FriendController', function($scope, $http){
    
    $scope.friends = [];
    $scope.totalFriends = 0;
    $scope.friendFilter = {};
    $scope.orderReverse = "false";
    $scope.orderAttribute = 'name';
    var handleApiResponse = function(response){
            var friends = response.results;
            angular.forEach(friends, function (friend) {
                friend.friend_count = parseInt(friend.friend_count);
            });
            console.log(friends);
            $scope.totalFriends = friends.length;
            $scope.friends = friends;
    };
    var url = 'https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json';
	$http.get(url).success(handleApiResponse);

});