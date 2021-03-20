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

    } else  {
      for (ctg in help_data) {
        if (args[0] === ctg) {
          embed.setTitle(ctg)
          for (command in help_data[ctg]) {
            var cmd = command
            var desc = help_data[ctg][command].Description

            console.log(cmd)
            console.log(desc)

            embed.addField(cmd, desc)

          }
        }
      }

    }  
    message.channel.send(embed)
	}

}
