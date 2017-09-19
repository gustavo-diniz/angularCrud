// Registrando o módulo
angular.module('crud.controllers.index',[],function() {

});

// Registrando um controller para o modulo
angular.module('crud.controllers.index').controller('crudController', function($scope) {
    
    $scope.addItem = function(){
        alert("ola");
    }
    
});