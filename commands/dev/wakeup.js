// -- Imports --


const { Dev } = require("../../dev_commands.json");
const command_data = Dev.wakeup;
// ------------


// Information
module.exports = {
  name: "wakeup",
  aliases: command_data.Aliases,  // You do not need to touch these

  run: async (client, message, args) => {
    // -- Code --

    message.delete()

    if (message.author.id === "428369959501168650") {
      client.guilds.cache.forEach(g => {
        g.systemChannel.send("I have awoken from my nap")
      })
    }
    // ----------
  }
}