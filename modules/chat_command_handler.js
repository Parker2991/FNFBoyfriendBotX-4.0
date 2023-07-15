const CommandSource = require('../CommandModules/command_source')
const CommandError = require('../CommandModules/command_error')

function inject (bot) {
  bot.on('parsed_message', data => {
    if (data.type !== 'minecraft:chat') return

    const plainMessage = bot.getMessageAsPrismarine(data.contents)?.toString()
    if (!plainMessage.startsWith(bot.commandManager.prefix)) return
    const command = plainMessage.substring(bot.commandManager.prefix.length)
  
    const source = new CommandSource(data.sender)
    source.sendFeedback = message => {
      const prefix = {
        translate: '[%s%s%s%s][%s][%s] ',
        bold: true,
        color: 'dark_gray',
        with: [
          { color: 'dark_purple', text: 'FNF' },
          { color: 'aqua', text: 'Boyfriend' },
          { color: 'dark_red', text: 'Bot' },
          { color: 'black', text: 'X' },
          { color: 'black', text: 'Ultimate' },
          { color: 'green', text: '4.0 Alpha' },
        
        ]
      }
      
      bot.tellraw(['', prefix, message])
    }

    bot.commandManager.executeString(source, command)

  })
}

module.exports = inject