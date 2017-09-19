// Registrando o módulo
angular.module('crud.controllers.index',[],function() {

});

// Registrando um controller para o modulo
angular.module('crud.controllers.index').controller('crudController', function($scope) {
    
    $scope.nomeInformado;
    $scope.resultado;
    
    $scope.informarNome = function(){
        $scope.resultado = "Voce informou o nome: "+$scope.nomeInformado;
    }
    
});