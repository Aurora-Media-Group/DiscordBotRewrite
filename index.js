// -- Imports --

const {Client, Collection, MessageEmbed} = require('discord.js');
const {prefix} = require('./config/config.json');
const client = new Client({ disableMentions: "everyone" });
const fs = require('fs');
console.log(prefix);

// ------------

// -- DB Init --

// -------------

// -- Bot Def --


client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

['command'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

// -------------

// -- On Ready --

client.on('ready', () => {
	console.log('Bot is online :-)');

	client.user
		.setActivity('www.auroramediagroup.xyz')

		.then(Presence =>
			console.log(`Activity set to ${Presence.activities[0].name}`)
		)

		.catch(console.error);
});

// --------------

// -- On Message --
// have more than one of these for different reasons

client.on('message', async message => {
	//this is what checks if the command exists
	if (!message.guild) return;

	if (message.author.bot) return;

	const prefix_check = message.content.toLowerCase();

	if (!message.content.startsWith(prefix)) return;

	console.log(message.content);

	if (!message.guild) return;

	if (!message.member)
		message.member = await message.guild.fetchMember(message);

	let args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/g);

	let cmd = args.shift().toLocaleLowerCase();

	if (cmd.length == 0) return;

	let command = client.commands.get(cmd);

	if (!command) command = client.commands.get(client.aliases.get(cmd));

	if (command) command.run(client, message, args);
});

client.on('message', (message, args) => {
	// If the bot gets dm'd
	if (!message.guild) {
		let args = message.content.trim().split(/ +/g);
		let msg = args.join(' ');
		client.channels.fetch('709551785261400095', false).then(channel => {
			let fembed = new MessageEmbed()
				.setTitle('New Direct Message')
				.setColor('#0477C2')
				.addFields(
					{
						name: '***User Name:***',
						value: `User tag: ${message.author.tag}\nUser Id: ${
							message.author.id
						}`
					},
					{
						name: '***Message:***',
						value: `${msg}`
					}
				);

			channel.send(fembed);
		});
	}
});
// ----------------

// -- Join Server --

//not sure on the syntax for this, i will search it up later
//this should send a message to Dan with a possible invite to the server

// Also, add the server to the messages db, and give it the default messages.

// Finally, send a message to the system channel, or the first channel in the server to say ty for adding me

client.on('guildMemberAdd', async (member) => {

  if (member.guild.id == 478952313562595329) {
	  member.guild.systemChannel.send(`Welcome ${member} to Aurora Media Group 
If you are looking to join the group then check <#661719364323770438> for information. 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Check out <#553998205696606218> to get your Custom Roles!
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
By using this server you agree to the Terms of Service outlined in the <#661168031271223306>
Have Fun`);
  } else if (member.guild.id === 782219245391314954) {
    member.guild.systemChannel.send(`${member} has joined the Aurora SMP Discord`);
  }
});

// -----------------

// -- Leave Server --

// same as join server, message dan to say its been yeeted from the server
client.on('guildMemberRemove', async (member) => {
	member.guild.systemChannel.send(`Goodbye ${user.user.tag}.We hope you come back.`);
});

// ------------------

// -- Member Join --

client.on('guildMemberAdd', (guild, member) => {
	// access the messages db and send a message based on the guild.
});
// -----------------

// -- Member Leave --

client.on('guildMemberRemove', (guild, member) => {
    if (guild.id === )
	// access the messages db and send the message based on the guild.
});

// ------------------

// -- Member Ban --

client.on('guildBanAdd', (guild, member) => {
	// access the messages db and send the message based on the guild
});

// -----------------

// -- Messages DB search --

//here create a function that takes 2 parameters guild.id and "ban"/"join"/"leave"/"etc"
//and returns the data from the db for the appropriate messages

//

// -- Run Client --
var token = process.env.TOKEN;

client.login(token);
// ----------------
