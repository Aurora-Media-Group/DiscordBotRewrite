// -- Imports --

const { Admin } = require("../../commands.json"); 
const command_data = Admin.kick;          // change Category and command_name
const {MessageEmbed} = require("discord.js");

// ------------


// Information
module.exports = {
  name: "kick",
  aliases: command_data.Aliases,

  run: async (client, message, args) => {
	// -- Code --
    if (message.member.hasPermission("KICK_MEMBERS")) {
      if (message.mentions.members.first()) {
        try {
          message.mentions.members.first().kick();
        } catch {
           message.reply("I do not have permissions to kick " + message.mentions.members.first());
        }
      } else {
        message.reply("You do not have permissions to kick " + message.mentions.members.first());
      }
    }
  // ----------
  }
}