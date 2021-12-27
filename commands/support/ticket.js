// -- Imports --

const { Support } = require("../../commands.json"); 
const command_data = Support.ticket;          // change Category and command_name
const { MessageEmbed } = require("discord.js");

// ------------


// Information
module.exports = {
  name: "ticket",
  aliases: command_data.Aliases,

  run: async (client, message, args) => {
    message.delete()

    const ch = message.guild.channels.cache.find(ch => ch.name === message.author.id)
    if(ch) return ch.send(`${message.author}, you already have a ticket open.`)

    message.guild.channels.create(`${message.author.id}`, {
      type: "text",
      parent: "816328167626768406",
      permissionOverwrites : [
        {
          id: message.guild.id,
          deny: ["VIEW_CHANNEL"]
        },
        {
          id: message.author.id,
          allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ADD_REACTIONS", "ATTACH_FILES"]
        }
      ]
    }).then(async channel => {
      channel.send(`${message.author}, welcome to your ticket! We will be with you soon. Use g!close to close the ticket`)
    })
  }
}