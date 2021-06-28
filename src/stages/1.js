const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg){

    if(msg =="*"){
        banco.db[user].stage = 0;
        return["pedido cancelado com sucesso"];
    }

    if(msg =="#"){
        banco.db[user].stage = 2 ;
        return ["Estamos fechando seu pedido, ok?"];
    }

    if(!cardapio.menu[msg]){
        return [
            "```Digite # para finalizar ou * para cancelar```",
            " Código inválido, digite o código do produto que você deseja"
        ];
    }
    
    banco.db[user].itens.push(cardapio.menu[msg]);

    return [
        "```Digite # para finalizar ou * para cancelar, se deseja adicionar outro produto ao carrinho insira o código do produto```", 
        `Item(${cardapio.menu[msg].descricao}) adicionado com sucesso`,
     ];
}

exports.execute = execute;