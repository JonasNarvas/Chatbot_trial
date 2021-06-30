const banco = require("../banco");
const stages = require("../stages");

let Passo = 0;

function execute (user, msg) {

    if(Passo===1){
        banco.db[user].stage = 4;

        return stages.step[4].obj.execute(user,"");
        
    }
    if(msg==="1") {
        Passo++;
        return ["Digite o valor para levarmos o troco: "];
    }
    if(msg==="2"){
        Passo++;
        return ["Digite a Bandeira do cartão para levarmos a máquina de acordo :"];
    }
    if (msg==="3") {
        return ["Chave do PIX: 000.000.000-00"]
    }
    return ["Escolha a forma de pagamento: \n 1- Dinheiro\n 2- Cartão\n 3- PIX"];
}

exports.execute = execute;