const request = require('request');//idk
const discord = require('discord.js'); //Discord.js is used to write bots in JavaScript
const roblox = require('roblox-js'); //Roblox-js is used to do some functions within www.roblox.com
const client = new discord.Client(); //Getting Discord Client
const prefix = '=';
const groupId = 3828960;
var issaVerify = false;
var verWord = (~~(Math.random() * 2) ? 'rutherfordium' : 'xenonite');
var verPeople = [];
var admissions = '397856542751326209';
var ausPers = '397855350595911682'
const config = require('./config.json');


//Console events.
client.on("ready", () => {
    client.user.setActivity(`대한민국 육군 복무 중: ${client.users.size}`);
    console.log(`대한민국 육군 ${client.users.size} users.`)

});

//isCommand function
function isCommand(command, message) {
    var command = command.toLowerCase(); //If a user types a command with uppercase either lowercase
    var content = message.content.toLowerCase();//it will get it.
    return content.startsWith(prefix + command);//Checking if the message has a prefix first.
};
//isNotCommand function (needed sometimes)

client.on('message', (message) => {

  if(isCommand('startup', message)){
    if(message.author.id !== config.ownerID){
      message.channel.send("핵스코어-대한민국 육군 | 창조자: <@467590352287694850> | 서버: Republic of Korea Army Communication | 대표: <@284689138102566912>")
    }
    else{
      message.channel.send("Error:1|| You do not have permmission/당신은 이 명령을 사용할 수 없습니다.")
    }
  }

  if(isCommand('basictraining', message)){
/*
message.channel.send({embed: {
color: 3447003,
author: {
  name: client.user.username,
  icon_url: client.user.avatarURL
},
title: "훈련 알람 봇",
description: "기초 훈련이 훈련소에서 이루어지고 있습니다",
fields: [{
  //`${LowRankRoleObject} 기초 훈련이 훈련소에서 이루어지고 있습니다[일병 OR-1], 훈련소로 집합하시기 바랍니다, 5분후에 기초 훈련이 잠깁니다. https://web.roblox.com/games/2433583525/Camp-Nonsan-V3`
  {
    name: "훈련 소식",
    value: "기초 훈련이 훈련소에서 이루어지고 있습니다[일병 OR-1], 훈련소로 집합하시기 바랍니다, 5분후에 기초 훈련이 잠깁니다. [링크](https://web.roblox.com/games/2433583525/Camp-Nonsan-V3)"
  }
],
timestamp: new Date(),
footer: {
  icon_url: client.user.avatarURL,
  text: "hexcore-roka"
}
}
}});


*/
   let LowRankRoleObject= message.guild.roles.find('name', 'ROKA Personnel [육군]');
  if(message.member.roles.find("name", "TRADOC")|| message.member.roles.find("name", "General Officer") || message.member.roles.find("name", "Officer")|| message.member.roles.find("name", "Goverment")){
    message.delete(1000);
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "훈련 알람 봇",
        url: "https://web.roblox.com/games/2433583525/Camp-Nonsan-V3",
        description: "기초 훈련이 훈련소에서 이루어지고 있습니다",
        fields: [
          {
            name: "훈련 소식",
            value: `${LowRankRoleObject} 기초 훈련이 훈련소에서 이루어지고 있습니다[일병 OR-1], 훈련소로 집합하시기 바랍니다, 5분후에 기초 훈련이 잠깁니다. [링크](https://web.roblox.com/games/2433583525/Camp-Nonsan-V3). `
          },
          {
            name: "호스트",
            value: message.member.displayName
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "hexcore-roka"
        }
      }
    });
    setTimeout(function(){
      message.channel.send("기초훈련이 잠겼습니다.")
    }, 300000)
  } else{
    message.reply("Error:1|| You do not have permmission/당신은 이 명령을 사용할 수 없습니다.")
  }



  }


if(isCommand('enlistedtraining', message)){

 let LowRankRoleObject= message.guild.roles.find('name', 'ROKA Personnel [육군]');
if(message.member.roles.find("name", "TRADOC")|| message.member.roles.find("name", "General Officer") || message.member.roles.find("name", "Officer")|| message.member.roles.find("name", "Goverment")){
  message.delete(1000);
  message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "훈련 알람 봇",
      url: "https://web.roblox.com/games/2433583525/Camp-Nonsan-V3",
      description: "사병 훈련이 훈련소에서 이루어지고 있습니다",
      fields: [
        {
          name: "훈련 소식",
          value: `${LowRankRoleObject} 사병 훈련이 훈련소에서 이루어지고 있습니다 [OR-2 일병, OR-3 상병], 훈련소로 집합하시기 바랍니다, 5분후에 사병 훈련이 잠깁니다. [링크](https://web.roblox.com/games/2433583525/Camp-Nonsan-V3). `
        },
        {
          name: "호스트",
          value: message.member.displayName
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "hexcore-roka"
      }
    }
  });
  setTimeout(function(){
    message.channel.send("사병 훈련이 잠겼습니다.")
  }, 300000)
} else{
  message.reply("Error:1|| You do not have permmission/당신은 이 명령을 사용할 수 없습니다.")
}



}
if (isCommand("help", message)) {
  message.channel.send("hexcore-roka 명령 리스트\n Default prefix is =\n help | enlistedtraining | basictraining | tagme | listrank | update")

}
  if(isCommand('listrank', message)){
    if(message.member.hasPermission('ADMINISTRATOR')){
      roblox.getRoles(3828960)
                        .then(function (roles) {
                        roles.forEach(function(item){
                          message.channel.send('"' + item.Name + '",')
                        })
                        })
  }

  }

//MP || TRADOC || SWC || NCO || KMA || DSSC
  if(isCommand("tagme", message)){
    let member = message.guild.member(message.author);
    var username = member.displayName
    var mp = 4467904;
    var tradoc = 4381596;
    var swc = 4381587;
    var nco = 4483550;
    var dssc = 4414962;
    let rokmp = message.guild.roles.find("name", "MP");
    let roktradoc = message.guild.roles.find("name", "TRADOC");
    let rokswc = message.guild.roles.find("name", "SWC");
    let roknco = message.guild.roles.find("name", "NCO");
    let rokdssc = message.guild.roles.find("name", "DSSC");

    if (username){
      roblox.getIdFromUsername(username)
    .then(function(id){
      roblox.getRankNameInGroup(mp, id)
      .then(function(rank){
        if(rank === 'Guest'){
          message.member.removeRole(rokmp)
        } else {
          message.member.addRole(rokmp)
        }
      })
      roblox.getRankNameInGroup(tradoc, id)
      .then(function(rank){
        if(rank === 'Guest'){
          message.member.removeRole(roktradoc)
        } else {
          message.member.addRole(roktradoc)
        }
      })
      roblox.getRankNameInGroup(swc, id)
      .then(function(rank){
        if(rank === 'Guest'){
          message.member.removeRole(rokswc)
        } else {
          message.member.addRole(rokswc)
        }
      })
      roblox.getRankNameInGroup(nco, id)
      .then(function(rank){
        if(rank === 'Guest'){
          message.member.removeRole(roknco)
        } else {
          message.member.addRole(roknco)
        }
      })
      roblox.getRankNameInGroup(dssc, id)
      .then(function(rank){
        if(rank === 'Guest'){
          message.member.removeRole(rokdssc)
        } else {
          message.member.addRole(rokdssc)
        }
      })
  })


  }
  message.reply("태그를 확인하십시오.")
  }
    if (isCommand('update', message)){
      console.log(`${text} has use "update" command`)
      var args = message.content.split(/[ ]+/)
      let member = message.guild.member(message.author);
       var username = args[1];
      var text = member.displayName

        roblox.getIdFromUsername(text)
        .then(function(id){
            roblox.getRankInGroup(groupId, id)
            .then(function(rank){
              let maj = message.guild.roles.find("name", "Low Rank");
              let maj2 = message.guild.roles.find("name", "Middle Rank");
              let maj1 = message.guild.roles.find("name", "High Command");
              let maj3 = message.guild.roles.find("name", "Chief Command");
                if (rank === 10) {
                    message.member.addRole(maj)
                }
                if(rank === 20) {
                      message.member.addRole(maj)
                } else if(rank === 30) {
                      message.member.addRole(maj)
                } else if(rank === 40) {
                      message.member.addRole(maj)
                } else if(rank === 50) {
                      message.member.addRole(maj)
                } else if(rank === 60) {
                      message.member.addRole(maj2)
                } else if(rank === 70) {
                      message.member.addRole(maj)
                } else if(rank === 80) {
                      message.member.addRole(maj1)
                } else if(rank === 90) {
                      message.member.addRole(maj1)
                } else if(rank === 100) {
                      message.member.addRole(maj1)
                } else if(rank === 110) {
                      message.member.addRole(maj1)
                } else if(rank === 120) {
                      message.member.addRole(maj3)
                } else if(rank === 130) {
                      message.member.addRole(maj3)
                } else if(rank === 150) {
                      message.member.addRole(maj3)
                }
            })
        })
    }

});



client.login("NTI1OTc3OTYwODcyODA0MzUz.Dv-fAQ.bvHxS9w18s7jHbw9uRpBrIuz3I8");
