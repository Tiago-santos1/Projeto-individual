var percentualModel = require("../models/percentualModel");

function kpiPercentual(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var email = req.params.email;

    // Faça as validações dos valores
    if (!email) {
        return res.status(400).json("Email não informado.");
    }
     percentualModel.kpiPercentual(email)
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // envia 1 objeto { Nome, idUsuario, Percentual }
            } else {
                res.status(204).send("Nenhum resultado encontrado.");
            }
        })
        .catch(erro => {
            console.log("Erro no KPI:", erro);
            res.status(500).json(erro.sqlMessage);
        });
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        // percentualModel.kpiPercentual(email)
        //     .then(
        //         function (resultado) {
        //             res.json(resultado);
        //         }
        //     ).catch(
        //         function (erro) {
        //             console.log(erro);
        //             console.log(
        //                 "\nHouve um erro ao realizar o cadastro! Erro: ",
        //                 erro.sqlMessage
        //             );
        //             res.status(500).json(erro.sqlMessage);
        //         }
        //     );
}

module.exports = {
    kpiPercentual
}