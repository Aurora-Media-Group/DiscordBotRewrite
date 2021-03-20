// -- Imports --

const { Info } = require("../../commands.json"); 
const command_data = Info.ping;          // change Category and command_name
const {MessageEmbed} = require("discord.js");

// ------------


// Information
module.exports = {
  name: "ping",
  aliases: command_data.Aliases,

  run: async (client, message, args) => {
    message.channel.send(`Finding bot's ping`).then(msg => {
      const ping = msg.createdTimestamp - message.createdTimestamp;
      msg.edit(`Bot's ping is ${ping}ms`);
      message.channel.send(`pong`)
    })
  }  
}
