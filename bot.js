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

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});




client.on('message', message => {
if (message.content.startsWith(":help"))
    message.channel.send("The bot is in development ")
    elseif (message.contect.startsWith(":ping"))
	message.channel.send(`Pong! The bot's ping is ${Date.now() - message.createdTimestamp} ms`);

});


	  
client.login(process.env.BOT_TOKEN);
