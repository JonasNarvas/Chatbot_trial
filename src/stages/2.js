const banco = require("../banco");

var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
 })

function execute(user, msg){
    
    
    if(msg === "*"){
        banco.db[user].itens.length = 0;
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
    resumo += ` Total ${formatter.format(total)}`;

    return [resumo,"Para confirmar digite # ou aperte * para cancelar"];
}

exports.execute = execute;

