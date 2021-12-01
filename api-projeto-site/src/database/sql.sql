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

insert into Usuario values
(null, 'Carlos Henrique','carlos@gmail.com','carlos123'),
(null, 'Mariana Clara','mariana@gmail.com','mariana123');

insert into Aviso (titulo, descricao, fkUsuario) values
('Muito Impactante!','Entender um pouco mais sobre essas ilhas de lixo me fizeram repensar em algumas atitudes.',1),
('Quero entender mais sobre...','Caso alguém esteja disponível para conversar sobre, meu email é mariana@gmail.com',2);