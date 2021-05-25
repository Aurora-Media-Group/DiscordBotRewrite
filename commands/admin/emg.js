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
	  message.channel.send("Please report the issue why you stopped the bot here: https://github.com/Aurora-Media-Group/DiscordBotRewrite/issues\nInclude detail and screenshots of what happened and what possibly activated it!")
	  process.exitCode(100)
	}
  // ----------
  }
  
}