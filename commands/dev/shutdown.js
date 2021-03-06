// -- Imports --

const command_name = "shutdown"; // change "command_name" to the name of the command
const { Dev } = require("dev_commands.json");  // rename these to the name of the category and command
const command_data = Dev.command_name;  // you can leave `command_data` and `command_name` as is but change `category_name`

// ------------


// Information
module.exports = {
  "name": command_name,
  "aliases": command_data.Aliases,  // You do not need to touch these

  run: async (client, message, args) {
    // -- Code --

    if (message.author.id in [,]) {
      for (guild in client.guilds) {
        guild.systemChannel.send("Im going for a nap, so my software update can be completed.")
	console.log(message.guild.owner)
      }
    }
    // ----------
  }
}