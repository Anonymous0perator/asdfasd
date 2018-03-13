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

    if(message.member.roles.find("name", "Verified")){
      let member = message.guild.member(message.author);
      member.setNickname(`[${member.highestRole.name}] ${member.user.username}`)
        }



  //Ping Command
  if (commandIs("ping")) {
    message.channel.send(`Pong! The bot's ping is ${Date.now() - message.createdTimestamp} ms`);
    return;
  }

  // Whois Command
  if (commandIs("userinfo")) {
    let member = message.guild.member(message.author);
    const embed = new Discord.RichEmbed()
      .setDescription("Description and information about yourself.")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0x70b080)
      .setFooter("xAtom", client.user.avatarURL)
      .setImage(message.author.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setTimestamp(new Date())
      .addField("Server Name", message.guild.name)
      .addField("Nickname", member.nickname)
      .addField("Moderator", member.hasPermission("BAN_MEMBERS"))
    message.channel.send(embed)
    return;
  }


  if (commandIs("help")) {
    const embed = new Discord.RichEmbed()
      .setTitle("Commands List for xAtom")
      .setDescription(`All the commands provided for the release version of xAtom. Default prefix is ${prefix}`)
      .setColor(0x70b080)
      .addField("help", "This help panel")
      .addField("ping", "Shows ping (message round trip) of the bot")
      .addField("userinfo", "Information about user in the server")
      .addField("verify", "Gives you a verified role (smart-automatic detection)")
      .addField("creators", "Credits for the bot")
      .addField("purge", "Delete a bulk load of messages (100 max)")
      .addField("ban", "Bans a member from the server")
      .addField("unban", "Unbans the member from the server")
      .addField("kick", "Kicks a member from the server")
      .addField("buy", "Gives invite to the xAtom main server | Price")
      .addField("warn", "It will warn the people who you tagged")
      .addField("translate", "It will any language to English")
      .setFooter("xAtom", client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)

    message.channel.send(embed);
  }

  if (commandIs("creators")) {
    const embed = new Discord.RichEmbed()
      .setTitle("Creators of xAtom")
      .setDescription("People who made bot xAtom successful and become better than anything before.")
      .setColor(0x70b080)
      .addField("Creator", "Anonymous0perator")
      .addField("Developers", "Encoloniel\nAnonymous0perator")
      .addField("GFX Artists", "Encoloniel")
      .setFooter("xAtom", client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)

    message.channel.send(embed);
  }
  if(commandIs("checked")){
    message.channel.send("xAtom is purchased. Next payment date is next monday");
  }
  if(commandIs("unchecked"))  {
      message.channel.send("xAtom is not purchased, xAtom will be leaving this server");

      message.guild.leave()
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
if(commandIs("translate")){
  if (!message.content.split(" ")[1]) {
    message.channel.send("You need to provide a sentence first!")
    return;
  }
  translate(message.content.split(" ").slice(1).toString(), {
    from: 'auto',
    to: 'en'
  }).then(res => {
    console.log(res.text);
    message.channel.send(`
      From ${isoConv(res.from.language.iso)} to English
      `)
    message.channel.send(res.text);
    return;
  }).catch(err => {
    message.channel.send(ess.errorHandle(err));
  });
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
  if (message.content.startsWith("!ban")) {
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
**You have been banned! - PERMANENT**
**Reason:** ${reason}

*Oh, no! Seems like you have been banned! What do I do now?*

You have been banned. This could be unfortunate or fortunate to you, depends on what you wanted to happen :thinking:
If you see this as bad news and would like to appeal and say sorry for one more chance, please join our appeal Discord server.(Link: https://discord.gg/FSZwEBV) If you break any of the rules in this server in here, you will be permanently banned from all of the servers *and* the appeals server.

Sad news, if you have done something that is very offensive or unforgivable by the admins, you are getting banned from the appeals server and will never be able to join the Gaze server again. You can use an alt though ;)

By the way, we still love you no matter what you did. Even though we hated, we weren't that offended. :heart:`).then(member.ban(reason))
      message.channel.send(`${member.user.tag} has been baned by ${message.author.tag} of the reason that ${reason}`);
      return;


    } catch (err) {
      message.channel.send(ess.errorHandle(err));
    }
  }
    if (message.content.startsWith("!updates")) {
      message.channel.send("Latest update : !setnick")
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

if (commandIs("verify")) {
  let role = message.guild.roles.find("name", "Verified");
  if (!role) {
    message.guild.createRole({
      name: 'Verified',
      color: 'GREEN',
    })
  }
  message.guild.member(message.author).addRole(role)
  message.author.sendMessage("You are verified")
  return;
}
})

client.on('message', message => {
  if (message.content === '!buy') {
  message.author.sendMessage("Thank you for using xAtom, please join this discord server to contect the owner Anonymous0perator#0510 | Discord code : https://discord.gg/V4B3QPA . For now it depends on your discord server members. \n What i mean by that is it counts on your amount of member \n The rate is correct :\n 50 members = 30R$ \n 100 members = 50R$")
  }
});


	  







	  
client.login(process.env.BOT_TOKEN);
