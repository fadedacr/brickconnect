const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
//const rp = require('request-promise');
const cheerio = require('cheerio');
const Gamedig = require('gamedig');
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  member.addRole("561027558423003137")
  .then(console.log("Roled member"))
  .catch(console.error);
});

  client.user.setActivity("test", { type: 'STREAMING', url: 'https://www.twitch.tv/urmom'})

client.login(process.env.BOT_NEW);
