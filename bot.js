const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json')
const fs = require("fs")
const groupId = 4205353;
const roblox = require('roblox-js');

client.on('ready', () => {
  console.log('System is ready');
  client.user.setPresence({
    game: {
      name :(``),
      type: 0
    }
  });
  client.guilds.array().forEach(function(element) {
  },);
});

const prefix = config.prefix

client.on('message', message => {

  if (message.author.bot) return;
  // Return if it is a DM

  // Saving memory, if there is no prefix it quits.
  if (!message.content.slice(1) === prefix) return;


  //Function for command checking
  function commandIs(command) {
    if (message.content.startsWith(prefix + command)) {
      return true;
    }
  }

if(commandIs("userinfo")){
  try {
     if (message.mentions.members.first()) {
       let member = message.mentions.members.first().user
       let guildMember = message.mentions.members.first()
       const embed = new Discord.RichEmbed()
         .setDescription("Description and information about " + member.tag)
         .setAuthor(member.username, member.displayAvatarURL)
         .setColor(3447003)
         .setThumbnail(member.displayAvatarURL)
         .setTimestamp(new Date())
         .setFooter("Kevlar Beta", client.user.avatarURL)
         .addField("ID", member.id)
         .addField("Discriminator", member.discriminator)
         .addField("Status", member.presence.status)

         .addField("Nickname", guildMember.nickname)
         .addField("Moderator", guildMember.hasPermission("BAN_MEMBERS"))
         .addField("Joined at", guildMember.joinedAt)
         .addField("Role(s)", guildMember.roles.array().join(", "))
       message.channel.send(embed)
     } else {
       let member = message.author
       let guildMember = message.guild.member(member)
       const embed = new Discord.RichEmbed()
         .setDescription("Description and information about " + member.tag)
         .setAuthor(member.username, member.displayAvatarURL)
         .setColor(3447003)
         .setThumbnail(member.displayAvatarURL)
         .setTimestamp(new Date())
         .setFooter("Kevlar Beta", client.user.avatarURL)
         .addField("ID", member.id)
         .addField("Discriminator", member.discriminator)
         .addField("Status", member.presence.status)

         .addField("Nickname", guildMember.nickname)
         .addField("Moderator", guildMember.hasPermission("BAN_MEMBERS"))
         .addField("Joined at", guildMember.joinedAt)
         .addField("Role(s)", guildMember.roles.array().join(", "))
       message.channel.send(embed)
     }
     return;
   } catch (err) {
     message.channel.send(ess.errorHandle(err));
   }
}

if(commandIs("buy")){
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Kevlar Beta",
    url: "",
    description: "Kevlar Beta helps your discord server, and connects discord and roblox.",
    fields: [
      {
        name: "Plan",
        value: "You can find monthly plan [here](https://docs.google.com/document/d/1ifi0dCPOgsRpdPx0K_LzqjrTmb8vB1KxUyw30SvMIYg/edit?usp=sharing)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Kevlar Beta"
    }
  }
});
}
if(commandIs('update', message)){
  message.channel.send("All of the commands are disabled.")
}
if(commandIs("membercount")){
	try {
      let guild = message.guild

      const embed = new Discord.RichEmbed()
        .setDescription("Membercount")
        .setColor(3447003)
        .setThumbnail(guild.iconURL)
        .setTimestamp(new Date())
        .addField("Name", guild.name, true)
        .addField("ID", guild.id, true)
        .addField("Owner", guild.owner.user.tag, true)
        .addField("Members", guild.memberCount, true)

      message.channel.send(embed)
      return;
    } catch (err) {
      console.log(err);
      message.channel.send(ess.errorHandle(err));
    }
}
if (commandIs("purge")) {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
     try {
      if (!Number(message.content.split(" ")[1])) {
        message.channel.send("Please provide a number for amount of messages to be deleted.")
        return;
      }
      let deleteCount = parseInt(message.content.split(" ")[1])
      if (deleteCount > 99) {
        message.channel.send("Please try lower number than 100.");
        return;
      }

      message.channel.fetchMessages({
        limit: deleteCount + 1
      }).then(messages => message.channel.bulkDelete(messages));
      message.channel.send("Purged and cleared!").then(msg => msg.delete())


    } catch (err) {
      message.channel.send(ess.errorHandle(err));
    }
    }
  }

})

  // Return if it is a bot









	  
client.login(process.env.BOT_TOKEN);
