// DEPENDANCIES
let Discord = require('discord.js');
let roblox = require('roblox-js');
let bot = new Discord.Client();

// LOGIN INFO
let username = "CAF_hexcore"; // ROBLOX
let password = "HJN-WeX-FY6-Mdh"; // ROBLOX

// MISC
let prefix = "=" // Prefix used for the command
let GroupId = 4572431;

// COMMAND

bot.on("ready", () => {
  client.user.setGame(`with shouts!`);
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
});

bot.on("message", async message => { // Event runs when there is a new message
if(message.author.bot) return; // Here we check if the message sender is the bot, if it is, it returns and does not carry any further.
if(message.content.indexOf(prefix) !== 0) return; // Checks if the message has the Prefix

// Here we separate our "command" and our "arguments/args" for the command. 
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

// Checks if the command is matching the provided string

if(command === "shout") {
    if(!message.member.roles.some(r=>["High Command"].includes(r.name)) ) // OPTIONAL - Checks if the sender has the specified roles to carry on further
        return message.reply("You can't use this command.");
  roblox.login(username, password)
  .then(function () {
    const shoutMSG = "Canadian Armed Forces Basic Training is being hosted in academy, please report to the academy. https://www.roblox.com/games/2631939165/CFB-Suffield-Military-Academy"; // Joins the arguments minus prefix to form the message to be shouted
        roblox.shout(GroupId, shoutMSG);
        console.log(`Shouted ${shoutMSG}`); // OPTIONAL - Logs specified string to the console
        message.reply(`Shouted ${shoutMSG} to the group.`) // OPTIONAL - Sends a message to the channe
  })
.catch(function (err) { // Catches any errors with the function
    console.error(err.stack);
    });
  }
})



bot.login(process.env.BOT_TOKEN) // Logs into Discord
