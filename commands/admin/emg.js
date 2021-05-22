// -- Imports --

const { Admin } = require("../../commands.json"); 
const command_data = Admin.emg;          // change Category and command_name
const {MessageEmbed} = require("discord.js");

// ------------


// Information
module.exports = {
  name: "emg",
  aliases: command_data.Aliases,

  run: async (client, message, args) => {
	// -- Code --
	if (message.member.hasPermission("ADMINISTRATOR")) {process.exit(100)}
  // ----------
  }
  
}