// TODO: Maybe move client creation elsewhere
const { Client, GatewayIntentBits } = require('discord.js')
const { MessageContent, GuildMessages, Guilds } = GatewayIntentBits

const CommandSource = require('../CommandModules/command_source')

const client = new Client({ intents: [Guilds, GuildMessages, MessageContent] })

client.login(process.env.discordtoken)

function inject (bot, options) {
  if (!options.discord?.channelId) {
    bot.discord = { invite: options.discord?.invite }
    return
  }

  bot.discord = {
    client,
    channel: undefined,
   // invite: options.discord.invite || undefined,
    commandPrefix: options.discord.commandPrefix
  }

  client.on('ready', () => {
    bot.discord.channel = client.channels.cache.get(options.discord.channelId)
  })

  // I feel like this is a modified version of ChomeNS Bot's discord plugin (the js one ofc) lol - chayapak

  let discordQueue = '' // too lazy to make an array mabe
  setInterval(async () => {
    if (discordQueue === '') return
    try {
      await bot.discord.channel.send(discordQueue.substring(0, 2000))
    } catch (error) {
      console.error(error)
    }
    //sus
    discordQueue = ''
  }, 1000)

  function sendDiscordMessage (message) {
    discordQueue += message
  }

  function sendComponent (message) {
    const ansi = bot.getMessageAsPrismarine(message).toAnsi().replaceAll('\u001b[9', '\u001b[3')

    /*
      would it be better to do
      ```
      message1
      message2
      message3...
      ```
      
      instead of
      
      ```
      message1
      ```
      ````
      message2
      ````
      ````
      message3...
      ```?
    */
    sendDiscordMessage('```ansi\n' + ansi.replaceAll('`', '\u200b`') + '\n```')
  }

  bot.on('message', message => {
    sendComponent(message)
  })

  function messageCreate (message) {
    if (message.author.id === bot.discord.client.user.id) return

    if (message.channel.id !== bot.discord.channel.id) return

    if (message.content.startsWith(bot.discord.commandPrefix)) { // TODO: Don't hardcode this
      const source = new CommandSource(null)
      source.sendFeedback = message => {
        sendComponent(message)
      }

      bot.commandManager.executeString(source, message.content.substring(bot.discord.commandPrefix.length))
      return
    }

    bot.tellraw({
      translate: '[%s] %s: %s',
      with: [
        {
          translate: bot.chat('&8&l[&5&lFNF&b&lBF&4&lBot&4&lDiscord&8&l] ' + message)
         
        },
        { text: message.member.displayName },
        message.content
      ]
    })
  }
  client.on('messageCreate', messageCreate)
}

module.exports = inject
