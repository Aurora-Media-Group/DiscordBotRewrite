// -- Imports --

const { Category } = require("../../commands.json"); 
const command_data = Category.command_name;          // change Category and command_name
const {MessageEmbed} = require("discord.js");

// ------------


// Information
module.exports = {
  name: "command_name",
  aliases: command_data.Aliases,

  run: async (client, message, args) => {
	// -- Code --
  // ----------
  }
  
}