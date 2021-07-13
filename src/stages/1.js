const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg){

    if(msg ==="*"){
        banco.db[user].itens.length = 0;
        banco.db[user].stage = 0;
        return["pedido cancelado com sucesso"];
    }

    if(msg ==="#"){
        banco.db[user].stage = 2 ;
        return ["Estamos fechando seu pedido, ok?"];
    }

    if(!cardapio.menu[msg]){
        return [
            " Código inválido, digite o código do produto que você deseja",
            "```Digite # para finalizar ou * para cancelar```"
            
        ];
    }
    
    banco.db[user].itens.push(cardapio.menu[msg]);

    return [
        `Item(${cardapio.menu[msg].descricao}) adicionado com sucesso`,
        "```Digite # para finalizar ou * para cancelar, se deseja adicionar outro produto ao carrinho insira o código do produto```", 
        
     ];
}

exports.execute = execute;