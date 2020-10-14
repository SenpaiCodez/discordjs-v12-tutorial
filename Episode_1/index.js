const { token, prefix } = require("./config.json")

const discord = require("discord.js")
const client = new discord.Client();

client.on("ready", () => {
  console.log("I shall serve my developer.")
  client.user.setActivity(`Tiktok`, {type: "WATCHING"})
})

client.on("message", message => {
  if(message.content === `${prefix}123`) {
  return message.channel.send("123456789")
  }
})

client.login(token)
