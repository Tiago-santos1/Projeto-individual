var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function kpiPercentual(email) {    
    var instrucaoSql = `
        select u.nome as Nome, r.fkUsuario as idUsuario, r.percentual as Percentual
	        from resultadoQuiz as r join Usuario u
            on r.fkUsuario = u.idUsuario
                where idUsuario = (select idUsuario from Usuario where email = '${email}');    
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    kpiPercentual
};