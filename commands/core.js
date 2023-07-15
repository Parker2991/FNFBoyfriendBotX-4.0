const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'core',

  execute (context) {
  const bot = context.bot
    const message = context.arguments.join(' ')

    
      bot.core.run(message.substring(1))
      return
    
    
  }
}
