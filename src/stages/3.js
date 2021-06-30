const banco = require("../banco");
const stages = require('../stages');

function execute(user, msg){
    if(msg === "*"){
        banco.db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }

    if(msg === "#"){
        banco.db[user].stage = 5;
        
        return stages.step[5].obj.execute(user,"");
    }
    return ["```Digite # para continuar ou * para cancelar```"
    ,`Confirmar endereço de entrega : \n ${msg}`
    ];
}

exports.execute = execute ; 