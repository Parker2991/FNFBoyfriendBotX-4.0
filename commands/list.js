const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'list',

  execute (context) {    
      const bot = context.bot
    bot.core.run('/say @a')
    context.source.sendFeedback('Very early for checking the player list i guess', false)      

  }
}
