const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg){

    banco.db[user].stage = 0;
    return["Aguarde, seu pedido chegará em breve",
     "Obrigado pela preferencia!"
    ];
}

exports.execute = execute;