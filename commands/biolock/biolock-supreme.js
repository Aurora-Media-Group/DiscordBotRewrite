// -- Imports --


// ------------


// Information
module.exports = {
  name: "biolock-supreme",
  aliases: [],

  run: async (client, message, args) => {
	// -- Code --

    message.delete()

    if (message.member.hasPermission("ADMINISTRATOR")) {
      if (args[0] === "alex") {
        let alex = client.users.fetch('310806196330168320'); //310066600957050882
        console.log(alex)
        alex.send({ files: ["../../images/alex1.png"] })
      }
    }
  // ----------
  }
}