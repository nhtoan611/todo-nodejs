var app = angular.module("app.todos", ["xeditable"]);

app.controller ("todoController", function($scope, $http){

    $scope.appname = "Todo Dashboard";
    $scope.formData ={};
    $scope.todos = [];
    $scope.loading = true;
    $http.get("/api/todos").then(
        function mySuccess(response){
            $scope.todos = response.data;
            $scope.loading = false;
        }
    );
    $scope.createTodo = function(){
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        }
        $http.post("/api/todo", todo).then(function mySuccess(response){
            $scope.todos = response.data;
            $scope.formData.text = "";
            $scope.loading = false;
        }); 
    }
    $scope.updateTodo = function(todo){
        $scope.loading = true;
        $http.put("/api/todo", todo).then(function mySuccess(response){
            $scope.todos = response.data;
            $scope.loading = false;
        })
    }
    $scope.deleteTodo = function(todo){
        $scope.loading = true;
        $http.delete("/api/todo/"+todo._id).then(function mySuccess(response){
            $scope.todos = response.data;
            $scope.loading = false;
        })
    }
})