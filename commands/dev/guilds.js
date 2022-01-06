// -- Imports --

const { Dev } = require("../../dev_commands.json"); 
const command_data = Dev.guilds;          // change Category and command_name
const {MessageEmbed} = require("discord.js");

// ------------


// Information
module.exports = {
  name: "guilds",
  aliases: command_data.Aliases,

  run: async (client, message, args) => {
	// -- Code --
    if (message.author.id === "428369959501168650") {
      for (guild of client.guilds) {
        console.log(guild.name)
      }
    }
  // ----------
  }
}