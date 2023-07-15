const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'ban',

  execute (context) {
   throw new CommandError('In the works!!!!')
    const target = context.arguments.join(' ')
    const bot = context.bot

   
    
  }
}
