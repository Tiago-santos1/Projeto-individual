var quizModel = require("../models/quizModel");

function listar(req, res) {
  var idUsuario = req.params.idUsuario;
  quizModel
    .listar(idUsuario)
    .then((resultado) => res.status(200).json(resultado))
    .catch((erro) => res.status(500).json(erro.sqlMessage));
}



function cadastrar(req, res) {
  try {
    console.log(req);

    var serverErradas = req.body.serverErradas;
    var serverCertas = req.body.serverCertas;
    var serverPercentual = req.body.serverPercentual;
    var fkUsuario = req.body.fkUsuario;
    var fkQuiz = req.body.fkQuiz;

    if (!fkUsuario) {
      res.status(400).send("Erro ao procurar usuário");
      return;
    }
    console.log("cadastrar - controller: " + req);

    quizModel.cadastrar(
     serverErradas,
     serverCertas, 
     serverPercentual,
     fkUsuario,
     fkQuiz,
    );
    res.status(200).json({ mensagem: "Resultado salvo com sucesso!" });
  } catch (erro) {
    console.log(erro);
    res.status(500).json(erro.sqlMessage);
  }
}

module.exports = {
  cadastrar,
  listar
};
