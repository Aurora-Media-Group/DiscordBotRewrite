// -- Imports --

require("discord.js");

// ------------


// -- DB Init --

// -------------


// -- Bot Def --

var client = "client" 

// -------------

// -- On Ready --

client.on("ready", (args) => {
  console.log("Bot is online");
});

// --------------


// -- On Message --

client.on("message", (message, args) => {
  // work out a way to detect spam and then warn

  //perform checks on the data to do the commands, also interact with the handler
}
// ----------------

// -- Join Server --

//not sure on the syntax for this, i will search it up later
//this should send a message to Dan with a possible invite to the server

// Also, add the server to the messages db, and give it the default messages.

// Finally, send a message to the system channel, or the first channel in the server to say ty for adding me

// -----------------

// -- Leave Server --

// same as join server, message dan to say its been yeeted from the server

// ------------------

// -- Member Join --

client.on("guildMemberAdd", (guild, member) => {
 // access the messages db and send a message based on the guild.
}
// -----------------

// -- Member Leave --

client.on("guildMemberRemove", (guild, member) => {
  // access the messages db and send the message based on the guild.
}

// ------------------

// -- Member Ban --

client.on("guildBanAdd", (guild, member) => {
  // access the messages db and send the message based on the guild
}

// -----------------

// -- Messages DB search --

//here create a function that takes 2 parameters guild.id and "ban"/"join"/"leave"/"etc"
//and returns the data from the db for the appropriate messages

//