// -- Imports --

const { Admin } = require("../../commands.json"); 
const command_data = Admin.unban;          // change Category and command_name
const {MessageEmbed} = require("discord.js");

// ------------


// Information
module.exports = {
  name: "unban",
  aliases: command_data.Aliases,

  run: async (client, message, args) => {
	// -- Code --

    for (ban in args) {
      user = client.users.cache.find(user => user.tag === args[ban])
      console.log(args[ban])
      console.log(user)
      if (!user) return message.channel.send(`Cannot find ${args[ban]}`)
      message.guild.members.unban(user.id)
      message.channel.send(`Unbanned ${args[ban]}`)
    }
  // ----------
  }
}