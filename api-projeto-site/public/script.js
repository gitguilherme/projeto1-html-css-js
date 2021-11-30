var grupo1 = ['https://i.imgur.com/fBDaV6B.png','https://i.imgur.com/ud8uf6K.png','https://i.imgur.com/JDTIXkD.png','https://i.imgur.com/tsHCKmV.png'];
var grupo2 = ['https://i.imgur.com/JFrB8GI.png','https://i.imgur.com/5zbL4NB.png','https://i.imgur.com/ZK0Vczu.png','https://i.imgur.com/yMyHrwZ.png'];
var mathg1 = grupo1[parseInt(Math.random()*4)];
var mathg2 = grupo2[parseInt(Math.random()*4)];


function descartar(){
    jogolixo.style.display = "none";
    resp.style.display = "block";
    botaojogo.style.display = "block";

    resp.innerHTML = `<img src="${mathg1}"> <br> <img src="${mathg2}">`
}


function novarodada(){
    jogolixo.style.display = "block";
    resp.style.display = "none";
    botaojogo.style.display = "none";

}

function jogar() {

 
    
    if (idquest1.value == "0" || idquest2.value == "0" || idquest3.value == "0" || idquest4.value == "0") {
        alert("Responda todas as questões!")
    } else {
        resposta.style.display = "none";
        resultado.style.display = "block";
        
        for (var i = 0; i <= 0; i++) {
        
        if (idquest1.value == "1") {
            i++;
        }if (idquest2.value == "2") {
            i++;
        }if (idquest3.value == "3") {
            i++;
        }if (idquest4.value == "2") {
            i++;
        }
    
        if(i < 4){
            resultado2.innerHTML = `Você acertou ${i} das 4 questões! Vamos melhorar na próxima rodada? :)`
        }else{
            resultado2.innerHTML = `Você acertou todas as ${i} questões! Parabéns, você realmente se preocupa com o mar! :D`
        }
   
}
    }
}

function jogar2() {
    resultado.style.display = "none";
    resposta.style.display = "block";
    
    idquest1.value = "0";
    idquest2.value = "0";
    idquest3.value = "0";
    idquest4.value = "0";

}

function cadastro() {
    divlogin.style.display = "none";
    divcadastro.style.display = "block";
}

function logar() {
    divlogin.style.display = "block";
    divcadastro.style.display = "none";
}
function entrar(){
        
        var formulario = new URLSearchParams(new FormData(document.getElementById("login")));

        var email = formulario.get("email");
        var senha = formulario.get("senha");

        console.log("FORM LOGIN: ", email);
        console.log("FORM SENHA: ", senha);

        // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
        if (email == "" || senha == "") {
            window.alert("Preencha todos os campos para prosseguir!");
            return false;
        }

        if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
            window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
            return false;
        }

        fetch("/usuarios/autenticar", {
            method: "POST",
            body: formulario
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.idUsuario;

                    setTimeout(function () {
                        divlogin.style.display = "none";
                        forum.style.display = "block";
                    }, 1000); // apenas para exibir o loading

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }
  
function sair(){
    divlogin.style.display = "block";
    forum.style.display = "none";
    idiptemail1.value = '';
    idiptsenha1.value = '';
}
function comentar(){
    // if(){

    // }else if(){

    // }
}

function sortear() {


    for (var i = 1; i <= 1; i++) {
        var math = (Math.random() * (10) + 1).toFixed(0);

        //desafios
        if (math == 1 || math == 6) {
            desafio.innerHTML = "<b>Desafio:</b> Evite o uso de descartáveis, seu uso é curto mas sua decomposição é longa!";
        } else if (math == 2 || math == 7) {
            desafio.innerHTML = "<b>Desafio:</b> Caso fume, não jogue bituca de cigarro no chão, podem acabar no mar!";
        } else if (math == 3 || math == 8) {
            desafio.innerHTML = "<b>Desafio:</b> Lembre sempre dos R's da Sustentabilidade: Recicle, reutilize e reduze!";
        } else if (math == 4 || math == 9) {
            desafio.innerHTML = "<b>Desafio:</b> Colabore com a coleta seletiva para que não o seu lixo não tenha destinos 'inapropriados'!";
        } else if (math == 5 || math == 10) {
            desafio.innerHTML = "<b>Desafio:</b> Utilize sacola retornável ao invés de plástica, você reduzirá o consumo de plástico!";
        }
    }console.log(math)
}


function cadastrar() {
    var formulario = new URLSearchParams(new FormData(document.getElementById("cadastro")));

    var nome = formulario.get("nome");
    var email = formulario.get("email");
    var senha = formulario.get("senha");
    var confirmacaoSenha = formulario.get("confirmacaoSenha");

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (nome == "" || email == "" || senha == "" || confirmacaoSenha == "") {
        
        window.alert("Preencha todos os campos para prosseguir!");
        if (nome == "")  {
            console.log('nome está em branco')
        }
        if (email == "" )  {
            console.log('email está em branco')
        }
        if (senha == "" )  {
            console.log('senha está em branco')
        }
        if (confirmacaoSenha == "" )  {
            console.log('confirmacaoSenha está em branco')
        }
        return false;
    }
    
    if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        return false;
    }
    
    if (senha != confirmacaoSenha) {
        window.alert("As senhas inseridas devem ser iguais para prosseguir!");
        return false;
    }

    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Cadastro realizado com sucesso!");
            divlogin.style.display = "block";
            divcadastro.style.display = "none";
            

        } else {
            throw("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
 
    });

    return false;
}
function limparFormulario() {
    document.getElementById("form_postagem").reset();
}

function publicar() {
    var idUsuario = sessionStorage.ID_USUARIO;

    var corpo = {
        titulo: form_postagem.titulo.value,
        descricao: form_postagem.descricao.value
    }
    
    fetch(`/avisos/publicar/${idUsuario}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Post realizado com sucesso pelo usuario de ID: "+idUsuario+"!");
            window.location = "#div-results";
            limparFormulario();   
            atualizarFeed()
          
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: "+resposta.status);
        }
    }).catch(function (erro) {
        console.log(`#ERRO: ${erro}`);
       
    });

    return false;

}


atualizarFeed()

function atualizarFeed() {
  
    fetch("/avisos/listar").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("feed_container");
                var mensagem = document.createElement("span");
                mensagem.innerHTML = "Nenhum resultado encontrado."
                feed.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var feed = document.getElementById("feed_container");
                feed.innerHTML = "";
                for (var i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];

                    // criando e manipulando elementos do HTML via JavaScript
                    var divPublicacao = document.createElement("div");
                    var spanID = document.createElement("span");
                    var spanTitulo = document.createElement("span");
                    var spanNome = document.createElement("span");
                    var divDescricao = document.createElement("div");
                    var divButtons = document.createElement("div");

                    // spanID.innerHTML = "ID: <b>" + publicacao.idAviso + "</b>";
                    spanTitulo.innerHTML = "Título: <b>"+publicacao.titulo+"</b><br>";
                    spanNome.innerHTML = "Autor: <b>"+publicacao.nome+"</b><br>";
                    divDescricao.innerHTML = "Descrição: <b>"+publicacao.descricao+"</b><br><br>";
                    
                    divPublicacao.className = "publicacao";
                    spanTitulo.id = "inputNumero"+publicacao.idAviso;
                    spanNome.className = "publicacao-nome";
                    spanTitulo.className = "publicacao-titulo";
                    divDescricao.className = "publicacao-descricao";

                    divButtons.className = "div-buttons"

                    divPublicacao.appendChild(spanID);
                    divPublicacao.appendChild(spanNome);
                    divPublicacao.appendChild(spanTitulo);
                    divPublicacao.appendChild(divDescricao);
                    divPublicacao.appendChild(divButtons);
                    feed.appendChild(divPublicacao);
                }

            });
        } else {
            throw('Houve um erro na API!');
        }
    }).catch(function(resposta) {
        console.error(resposta);
    });
}


function listarmetrica(){
   
    fetch("/usuarios/listarmetrica").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
               
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                
                for (var i = 0; i < resposta.length; i++){
                    var arquivo = resposta[i];
                    metrica.innerHTML = `${arquivo.qntdUsuarios} Pessoas já se cadastraram. Participe também.`;
                }
                
            });
        } else {
            throw('Houve um erro na API!');
        }
    }).catch(function(resposta) {
        console.error(resposta);
    });
}