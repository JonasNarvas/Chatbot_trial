const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user,msg){
   let menu = " Cardápio \n\n";

    Object.keys(cardapio.menu).forEach((value)=> { 
        let element = cardapio.menu[value];
        menu += `${value} - ${element.descricao}      R$ ${element.preco} \n`;
    });

    banco.db[user].stage = 1;

    return ["Olá, sou uma assistente virtual. Para fazer o pedido basta enviar o codigo do produto, um por vez", menu];
}

exports.execute = execute;