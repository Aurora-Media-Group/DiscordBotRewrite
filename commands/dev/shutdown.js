// -- Imports --
const { Dev } = require("../../dev_commands.json");  
const command_data = Dev.shutdown;  


// ------------


// Information
module.exports = {
  name: "shutdown",
  aliases: command_data.Aliases,  // You do not need to touch these

  run: async (client, message, args) => {
    // -- Code --
    message.delete()

    if (message.author.id === "428369959501168650") {
      client.guilds.cache.forEach(g => {
        g.systemChannel.send("Im going for a nap, so my software update can be completed. Temp Bans/Mutes etc will not be saved.")
      })
    }
    // ----------
  }
}