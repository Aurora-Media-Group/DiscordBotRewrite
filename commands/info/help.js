// -- Imports --

const { Info } = require("../../commands.json"); 
const command_data = Info.help;
const {MessageEmbed} = require("discord.js");

const help_data = require("../../commands.json");

// ------------


// Information
module.exports = {
  name: "help",
  aliases: command_data.Aliases,  // You do not need to touch these

  run: async (client, message, args) => {
	// -- Code --

	const embed = new MessageEmbed();

	var found = true;

	if (args[0]) {
    if(help_data[args[0]]) {
		embed.setTitle(args[0]);

		for (command in help_data[args[0]]) {
      console.log(command)
      console.log(command["Description"])
			
			embed.addField({
        name: command, 
        value: help_data[args[0]][command]["Description"]
      });
		}

	  } else {
		  for (category in help_data) {
          if (category[args[0]]) {
            embed.setTitle(args[0]);
            embed.add_field({name: "Aliases", value: category.args[0].Aliases});
            embed.add_field({name: "Description", value: category.args[0].Description});
            embed.add_field({name: "Usage", value: category.args[0].Usage});
            message.channel.send(embed);
            return; 
          }
        }
      }
    } else {
			embed.setTitle("Help Menu");

      for (category in help_data) {
        command_string = ""
        for (command in help_data[category]) {
          command_string += "`"+ command +"`, "
        }
        embed.addField(category, command_string)
      }
				
		}
  message.channel.send(embed)
  }
  
}