// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const banco = require('./banco')
const stages = require('./stages')


// let resp = stages.step[getStage("555197773164@c.us")].obj.execute();
//     for (let index = 0; index < Array(resp).length; index++) {
//       const element = Array(resp)[index];
//       console.log(element);
//     }


venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    console.log(message);
    let resp = stages.step[getStage(message.from)].obj.execute(
      message.from,
       message.body,
       message.sender.name
       );
    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      client.sendText(message.from,element);
      
    }   
  });
}



function getStage(user) {
  if (banco.db[user]) {
      return banco.db[user].stage;
  } else {
      banco.db['555199644173@c.us'] = {
          stage: 0,
          itens: [],
      };
      return banco.db[user].stage;
  }
}