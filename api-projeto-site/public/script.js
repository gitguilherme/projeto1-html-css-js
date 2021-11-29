

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

function cadastrar() {
    login.style.display = "none";
    cadastro.style.display = "block";
}

function logar() {
    login.style.display = "block";
    cadastro.style.display = "none";
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