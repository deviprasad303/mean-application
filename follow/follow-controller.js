/**
 * Created by devi on 8/9/2017.
 */
(function(){
    angular.module('mean-demo')
        .controller('FollowController',['$scope','$http',function($scope,$http){
$scope.user=JSON.parse(localStorage['User-Data']);
            console.log($scope.user);
            $http.get('api/user/get').then(function(response){
    $scope.users= response.data;
    console.log($scope.users);
    }
)
            $scope.follow=function(userId,meanId){
                data={
                    userId:userId,
                    meanId:meanId
                };
                $http.post('api/users/follow',data).then(function(){
                    console.log("following",meanId);
                })
            }
        }]);
}());