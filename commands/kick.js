const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'kick',
//why i put it in here probably cuz so it can be rewritten or smh idk
  execute (context) {
    throw new CommandError('In the works!!!!!!')

    const bot = context.bot
    const target = context.arguments.join(' ')

    
  }
}





