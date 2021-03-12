const { Message } = require('discord.js')
const { Admin } = require("../../commands.json"); 
const command_data = Admin.unmute;          // change Category and command_name
const {MessageEmbed} = require("discord.js");

module.exports=  {
    name : 'unmute',
    aliases:  command_data.Aliases,
    /**
     * @param {Message} message
     */
    run: async(client, message, args) => {
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Member not found')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        message.channel.send(`${Member.displayName} is now unmuted`)

        // here, check if the user is in the tempmute DB and 
    }
}