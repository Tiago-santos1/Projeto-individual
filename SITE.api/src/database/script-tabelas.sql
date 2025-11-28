create database Projeto_individual;
use Projeto_individual;
drop database Projeto_individual;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(30),
email varchar(40),
senha varchar(200)
);

create table quiz(
idQuiz int primary key auto_increment,
descricao VARCHAR(45)
);

create table resultadoQuiz(
idResultadoQuiz int auto_increment,
erros_perguntas int,
acertos_perguntas int,
fkUsuario int,
fkQuiz int,
primary key(fkUsuario,fkQuiz),
constraint resultadoUsuario foreign key (fkUsuario) references usuario(idUsuario),
constraint resultadoQuiz foreign key(fkQuiz) references quiz(idQuiz)
);

INSERT INTO quiz(descricao) VALUES("Quiz sobre minha escola");