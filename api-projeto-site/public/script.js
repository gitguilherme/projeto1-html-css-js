function jogar(){
    resposta.style.display = "none";
    resultado.style.display = "block";
    resultado2.innerHTML = `Você não acertou nenhuma questão, estude mais! :(`
    resultado2.innerHTML = `Você acertou ${i} questões! Vamos melhorar na próxima rodada? :)`
    resultado2.innerHTML = `Você acertou ${i} questões! Parabéns, você realmente se preocupa com o mar! :D`
}

function jogar2(){
    resultado.style.display = "none";
    resposta.style.display = "block";


}

function cadastrar(){
    login.style.display = "none";
    cadastro.style.display = "block";
}

function logar(){
    login.style.display = "block";
    cadastro.style.display = "none";
}

function sortear(){
   

    for(var i = 1; i <= 1; i++){
        var math = (Math.random()*(5)+1).toFixed(0);

    //desafios
    if (math == 1){
        desafio.innerHTML = "Evite o uso de descartáveis, seu uso é curto mas sua decomposição é longa!";
    }  else if (math == 2){
        desafio.innerHTML = "Caso fume, não jogue bituca de cigarro no chão, podem acabar no mar!";
    }  else if (math == 3){
        desafio.innerHTML = "Lembre sempre dos R's da Sustentabilidade: Recicle, reutilize e reduze!";
    }else if (math == 4){
        desafio.innerHTML = "Colabore com a coleta seletiva para que não o seu lixo não tenha destinos 'inapropriados'!";
    }else if (math == 5){
        desafio.innerHTML = "Utilize sacola retornável ao invés de plástica, você reduzirá o consumo de plástico!";
    }
}
}