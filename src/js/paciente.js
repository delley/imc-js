function criarPaciente(pacienteTr) {

  var tdNome = pacienteTr.getElementsByClassName('info-nome')[0];
  var tdPeso = pacienteTr.getElementsByClassName('info-peso')[0];
  var tdAltura = pacienteTr.getElementsByClassName('info-altura')[0];

  var paciente = {
        nome: tdNome.textContent
      , peso: tdPeso.textContent
      , altura: tdAltura.textContent
      , pegaIMC: function () {
          if(this.altura != 0) {

            var imc = this.peso / (this.altura * this.altura);
            return imc;

          } else {
            console.log('Não posso dividir por zero!');
          }
        }
      };

  return paciente;
}
