function msn(){
    var nome = prompt("Digite seu nome: ")

    var hoje = new Date();
    var agora = hoje.getHours();
    var msg;
    if (agora > 18){
        msg = "Boa noite " + nome;
    }else if(agora > 12){
        msg = "Boa tarte " + nome;
    }else if(agora > 0){
        msg = "Boa noite " + nome;
    }else{
        msg = "Bem vindo";
    }
    alert(msg);
}