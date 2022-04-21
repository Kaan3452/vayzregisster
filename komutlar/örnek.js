const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  message.channel.send("Selam! Nasılsın?");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Merhaba", "Selam"],
  permLevel: 0
};

exports.help = {
  name: "selam",
  description: "Örnek açıklama.",
  usage: ".örnek <kullanım>"
};
