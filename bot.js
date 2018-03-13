const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
  console.log('Bot is up and running!');
  client.user.setPresence({
    game: {
      name :(`:help | Servers: ${client.guilds.size}`),
      type: 0
    }
  });
});

const prefix = ':'
client.on('message', message => {
  // Return if it is a bot
  if (message.author.bot) return;
  // Return if it is a DM
  if (!message.guild) {
    message.channel.send("You cannot do any of the bot's commands in DM")
    return;
  }

  // Saving memory, if there is no prefix it quits.
  if (!message.content.slice(1) === prefix) return;


  //Function for command checking
  function commandIs(command) {
    if (message.content.startsWith(prefix + command)) {
      return true;
    }
  }

 



  //Ping Command
  if (commandIs("ping")) {
    message.channel.send(`Pong! The bot's ping is ${Date.now() - message.createdTimestamp} ms`);
    return;
  }

  // Whois Command
  if (commandIs("userinfo")) {
   try {
      if (message.mentions.members.first()) {
        let member = message.mentions.members.first().user
        let guildMember = message.mentions.members.first()
        const embed = new Discord.RichEmbed()
          .setDescription("Description and information about " + member.tag)
          .setAuthor(member.username, member.displayAvatarURL)
          .setColor(0x70b080)
          .setThumbnail(member.displayAvatarURL)
          .setTimestamp(new Date())
          .setFooter("xAtom", client.user.avatarURL)
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
          .setColor(0x70b080)
          .setThumbnail(member.displayAvatarURL)
          .setTimestamp(new Date())
          .setFooter("xAtom", client.user.avatarURL)
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


  if (commandIs("help")) {
    const embed = new Discord.RichEmbed()
      .setTitle("Commands List for xAtom")
      .setDescription(`All the commands provided for the release version of xAtom. Default prefix is ${prefix}`)
      .setColor(0x70b080)
      .addField("help", "This help panel")
      .addField("ping", "Shows ping (message round trip) of the bot")
      .addField("userinfo", "Information about user in the server")
      .addField("verify", "Gives you a verified role (roblox supported)")
      .addField("purge", "Delete a bulk load of messages (100 max)")
      .addField("ban", "Bans a member from the server")
      .addField("unban", "Unbans the member from the server")
      .addField("kick", "Kicks a member from the server")
      .addField("warn", "It will warn the people who you tagged")
      .addField("support", "Invite link to support channel")
      .setFooter("xAtom", client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)

    message.channel.send(embed);
  }

    if(commandIs("mute")) {
      client.muteUser = function (user, channel, callback) {
          var object = {"readMessages": false, "sendMessages": false};
          self.bot.overwritePermissions(channel, user, object, callback);
      }
    }
    if(commandIs("unmute")){
      client.unmuteUser = function (user, channel, callback) {
          var object = {"readMessages": true, "sendMessages": true};
          self.bot.overwritePermissions(channel, user, object, callback);
}
    }



  if (commandIs("purge")) {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.fetchMessages()
        .then(function(list) {
          message.channel.bulkDelete(list);
        }, function(err) {
          message.channel.send("ERROR: ERROR CLEARING CHANNEL.")
        })
    }
  }
  if(commandIs("warn")){

    try {
      let member = message.mentions.members.first();
      if (!member) {
        message.channel.send("Please mention a valid member in this guild.");
        return;
      }
      if (!member.kickable) {
        message.channel.send("I cannot warn this user. Please check permissions.");
        return;
      }

      let reason = message.content.split(" ").slice(2).join(" ")
      if (!reason) {
        message.channel.send("Please indicate a reason for the warn!");
        return;
      }

      member.send(`You have been warned for ${reason}`)
      message.channel.send(`${member.user.tag} has been warned by ${message.author.tag} of the reason that ${reason}`);
      return;


    } catch (err) {
      message.channel.send(ess.errorHandle(err));
    }
  }

  if (commandIs("kick")) {
    try {
      let member = message.mentions.members.first();
      if (!member) {
        message.channel.send("Please mention a valid member in this guild.");
        return;
      }
      if (!member.kickable) {
        message.channel.send("I cannot kick this user. Please check permissions.");
        return;
      }

      let reason = message.content.split(" ").slice(2).join(" ")
      if (!reason) {
        message.channel.send("Please indicate a reason for the kick!");
        return;
      }

      member.kick(reason)
      message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag} of the reason that ${reason}`);
      return;


    } catch (err) {
      message.channel.send(ess.errorHandle(err));
    }
  }
  if (message.content.startsWith(":ban")) {
    try {
      let member = message.mentions.members.first();
      if (!member) {
        message.channel.send("Please mention a valid member in this guild.");
        return;
      }
      if (!member.bannable) {
        message.channel.send("I cannot ban this user. Please check permissions.");
        return;
      }

      let reason = message.content.split(" ").slice(2).join(" ")
      if (!reason) {
        message.channel.send("Please indicate a reason for the ban!");
        return;
      }

      member.send(`
You have been banned! - PERMANENT
Reason: ${reason} `).then(member.ban(reason))
      message.channel.send(`${member.user.tag} has been baned by ${message.author.tag} of the reason that ${reason}`);
      return;


    } catch (err) {
      message.channel.send(ess.errorHandle(err));
    }
  }
if(commandIs("unban")){
  try {

    let userid = message.content.split(" ").slice(1).join(" ")
    if (!userid) {
      message.channel.send("Please use an ID of the user to unban.");
      return;
    }

    message.guild.unban(userid)
    message.channel.send(`<@357479079378681857> has been unbaned by ${message.author.tag}. Happy returning!`);
    return;


  } catch (err) {
    message.channel.send(ess.errorHandle(err));
  }
}


})

client.on('message', message => {
  if (message.content === ':support') {
  message.author.sendMessage("Please, join the discord server for the support you need. https://discord.gg/cx5mBWn")
  }
});


	  







	  
client.login(process.env.BOT_TOKEN);
