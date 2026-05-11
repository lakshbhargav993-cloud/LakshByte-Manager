require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.once("ready", () => {
  console.log(`🔴 ${client.user.tag} Online!`);
});

client.on("guildMemberAdd", member => {
  const channel = member.guild.systemChannel;

  if (channel) {
    channel.send(`🔴 Welcome ${member} to **${member.guild.name}**!`);
  }
});

client.login(process.env.TOKEN);
