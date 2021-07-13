const banco = require("../banco");

function execute(user, msg){

    if(msg === "*"){
        banco.db[user].itens = null;
        print (banco.db[user].itens);
        console.log(banco.db[user].itens);
        banco.db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }

    if(msg === "#"){
        banco.db[user].stage = 3;
        return ["Digite o endereço de entrega por favor : "];
    }

    let resumo = " Resumo do Pedido: \n";
    let total = 0;
    banco.db[user].itens.forEach((value)=>{
        console.log(value);
        resumo += `${value.descricao} -------------- ${value.preco} \n`;
        total += value.preco;
    });

    resumo += "--------------------------\n";
    resumo += ` Total R$ ${total}`;

    return ["Para confirmar digite # ou aperte * para cancelar",resumo];
}

exports.execute = execute;
