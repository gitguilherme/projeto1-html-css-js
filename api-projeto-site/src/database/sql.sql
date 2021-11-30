create database Projeto;
use Projeto;

create table Usuario(
idUsuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50));

create table Aviso(
idAviso int primary key auto_increment,
titulo varchar(100),
descricao varchar(250),
fkUsuario int,
foreign key (fkUsuario) references Usuario (idUsuario));

select * from Usuario;
select * from aviso;
