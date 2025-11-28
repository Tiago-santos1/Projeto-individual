var database = require("../database/config");

function listar(idUsuario) {
  var instrucao = `
        SELECT idResultadoQuiz, erros_perguntas, acertos_perguntas, percentual FROM resultadoQuiz WHERE fkUsuario = ${idUsuario} ORDER BY idResultadoQuiz ASC;
    `;
  console.log(instrucao);
  return database.executar(instrucao);
}


function cadastrar(
    serverErradas,
    serverCertas,
    serverPercentual,
    fkUsuario,
    fkQuiz
) {
    var porcentualAtualizado = serverPercentual * 100
    var instrucao = `
        INSERT INTO resultadoQuiz
        (erros_perguntas, acertos_perguntas, percentual, fkUsuario, fkQuiz)
        VALUES (${serverErradas}, ${serverCertas},${porcentualAtualizado} ,${fkUsuario}, ${fkQuiz});
    `;

    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};
