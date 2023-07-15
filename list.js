const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'list',
  
  execute (context) {


    const bot = context.bot

    bot.core.run('/console @a')

    context.source.sendFeedback('totally wasnt coded through github', false)
  }
}




//what is wi
// IDK
