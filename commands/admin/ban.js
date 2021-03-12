// -- Imports --

const { Admin } = require("../../commands.json"); 
const command_data = Admin.ban;          // change Category and command_name
const {MessageEmbed} = require("discord.js");

// ------------


// Information
module.exports = {
  name: "ban",
  aliases: command_data.Aliases,

  run: async (client, message, args) => {
	// -- Code --

    if (message.member.hasPermission("BAN_MEMBERS")) {
      if (message.mentions.members.first()) {
        try {
            message.mentions.members.first().ban();
            await message.channel.send(`Yeeted ${message.mentions.members.first().user.username}`)
        } catch {
            message.reply("I do not have permissions to ban <@" + message.mentions.members.first() +">");
        }
    }} else {
        message.reply("You do not have permissions to ban " + message.mentions.members.first());
    }
  // ----------
  }
}