// -- Imports --

const command_name = "help"; // change "command_name" to the name of the command
const { Info } = require("commands.json");  // rename these to the name of the category and command
const command_data = Info.command_name;  // you can leave `command_data` and `command_name` as is but change `category_name`

const {MessageEmbed} = require("discord.js");

const help_data = require("commands.json");

// ------------


// Information
module.exports = {
  "name": command_name,
  "aliases": command_data.Aliases,  // You do not need to touch these

  run: async (client, message, args) {
	// -- Code --

	const embed = new MessageEmbed();

	var found = true;

	if (args[0] in help_data) {
		embed.title(args[0]);

		for (command in help_data.args[0]) {
			
			embed.add_field({name: command, value=command.Description});
		}

	} else {
		for (category in help_data) {
			if (args[0] in helpdata.category) {
				embed.title(args[0]);
				embed.add_field({name: "Aliases", value: category.args[0].Aliases});
				embed.add_field({name: "Description", value: category.args[0].Description});
				embed.add_field({name: "Usage", value: category.args[0].Usage});
				message.channel.send(embed);
				return;
			} else {
				found=false;
			}
		if (!found) {
			
			embed.title("Help Menu");
			var command_string = "";
		
			for (category in help_data) {
				for (command in help_data.category) {
					command_string += "`"+command+"`, "
				}
				
				command.add_field({name=category, value=command_string})
			}

		}
	}

	// ----------
  }
}