angular.module('crud.service.consultas',[]);
angular.module('crud.service.consultas').service('serviceConsultas', function(){
    
    
    this.calculaMaioridade = function(idade){
           if(idade > 18){
               return "Maior de idade";
           }else{
               return "Menor de idade";
           }
    }    
});