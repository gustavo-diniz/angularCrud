// Registrando o módulo
angular.module('crud.controller.index',[],function() {

});

// Registrando um controller para o modulo
angular.module('crud.controller.index').controller('crudController', function($scope, serviceConsultas) {
    
    $scope.nomeInformado;
    $scope.resultado;
    $scope.idade;
    $scope.resultadoMaioridade;
    
    $scope.informarNome = function(){
        $scope.resultado = "Voce informou o nome: "+$scope.nomeInformado;
    }
    
    $scope.calculaIdade = function(){
       $scope.resultadoMaioridade = serviceConsultas.calculaMaioridade($scope.idade);
    }
    
});