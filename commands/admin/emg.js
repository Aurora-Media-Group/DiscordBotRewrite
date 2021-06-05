// -- Imports --

const { Admin } = require("../../commands.json"); 
const command_data = Admin.emg;          // change Category and command_name
const {MessageEmbed} = require("discord.js");

// ------------


// Information
module.exports = {
  name: "emg_test",
  aliases: command_data.Aliases,

  run: async (client, message, args) => {
	// -- Code --
	if (message.member.hasPermission("ADMINISTRATOR")) {
	  console.log(message.author)
	  message.channel.send("Bot Deactivated!")
	  process.exitCode(100)
	}
  // ----------
  }
  
}