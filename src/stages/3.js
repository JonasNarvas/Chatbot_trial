const banco = require("../banco");
const stages = require('../stages');

function execute(user, msg){
    if(msg === "*"){
        banco.db[user].itens.length = 0;
        banco.db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }
    if(msg ==="!"){
        return ["Digite o endereço de entrega, por favor: "];
    }

    if(msg === "#"){
        banco.db[user].stage = 5;
        
        return stages.step[5].obj.execute(user,"");
    }
    return ["```Digite # para continuar ou * para cancelar o pedido```"
    ,`Endereço de entrega : \n ${msg}\n para corrigir o endereço digite: "!"`
    ];
}

exports.execute = execute ; 