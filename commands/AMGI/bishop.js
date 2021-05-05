const { AMGI } = require("../../commands.json");  
const command_data = AMGI.bishop;

module.exports = {
    name:'bishop',
    aliases: command_data.Aliases,
    run: async(client, message, args) => {
      const bishop = client.emojis.cache.find(emoji => emoji.name === "Bishop");
      message.channel.send(`${bishop}`)

      random = Math.floor(Math.random() * 10); 

      if (random === 0) {  
        message.channel.send(`Bishop Good`)
      } else {
        message.channel.send(`Bishop Bad`)
      }
    }
}
