var botao = document.getElementById('calcula-imcs');
//botao.onclick = calcularTodosIMCs; <-- outra forma de associar uma função a um evento click

botao.addEventListener('click', function calcularTodosIMCs() {
  var trsPacientes = document.getElementsByClassName('paciente');

  percorreArray(trsPacientes, function (pacienteTr) {

    var pacienteAtual = criarPaciente(pacienteTr);

    var imc = pacienteAtual.pegaIMC();

    var tdImc = pacienteTr.getElementsByClassName('info-imc')[0];
    tdImc.textContent = imc;

    console.log(imc);
  });

});
