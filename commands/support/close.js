// -- Imports --

const { Support } = require("../../commands.json"); 
const command_data = Support.close;          // change Category and command_name
const { MessageEmbed } = require("discord.js");

// ------------


// Information
module.exports = {
  name: "close",
  aliases: command_data.Aliases,

  run: async (client, message, args) => {
    if (message.channel.parentID !== "816328167626768406") return message.channel.send("You can only use this command in a ticket!");
    const transcriptChannel = message.channels.cache.get("689584207114272768");
    message.channel.send("Delering ticket in 5 seconds...");
    setTimeout(() => {
      message.channel.delete().then(async (ch) => {
        client.ticketTranscript.findOne({ Channel: ch.id }, async (err, data ) => {
          if (err) throw err;
          if (data) {
            console.log(data);
            fs.writeFileSync(`../${ch.id}.txt`, data.Content.join("\n\n"));

            transcriptChannel.send(`${message.guild.members.cache.get(ch.name).user.username}'s ticket has been deleted'`)
            await transcriptChannel.send(new MessageAttachment(fs.createReadStream(`../${ch.id}.txt`)))
          }
        })
      })
    }, 5000)
  }
}