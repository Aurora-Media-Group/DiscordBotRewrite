// -- Imports --

const command_name = "command_name"; // change "command_name" to the name of the command
const { category_name } = require("commands.json");  // rename these to the name of the category and command
const command_data = category_name.command_name;  // you can leave `command_data` and `command_name` as is but change `category_name`

const {MessageEmbed} = require("discord.js");

const help_data = require("commands.json");

// ------------


// Information
module.exports = {
  "name": command_name,
  "aliases": command_data.Aliases,  // You do not need to touch these

  run: async (client, message, args) {
	// -- Code --


	// ----------
  }
}