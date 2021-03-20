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
    
    const embed = new MessageEmbed();
    if (!args[0]) {
      embed.setTitle("Help Menu");
      for (category in help_data) {
        command_string = ""
        for (command in help_data[category]) {
          command_string += "`"+ command +"`, "
          
        }
        embed.addField(category, command_string)
      }

    } else if (!args[1]) {
      embed.setTitle([args[0]])
      for (command in help_data[args[0]]) {
        var cmd = command
        var desc = help_data[args[0]][command].Description

        embed.addField(cmd, desc)

      }
    } else {
      embed.setTitle(args[1])
      for (item in help_data[args[0]][args[1]]) {
        val = help_data[args[0]][args[1]][item]
        console.log(val[0])
        if (!val[0]) {val = "None"}
        embed.addField(
          item,
          help_data[args[0]][args[1]][item]
        )
      }
    
    }
    message.channel.send(embed)
	}

}
