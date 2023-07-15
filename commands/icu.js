const CommandError = require('../CommandModules/command_error')

let timer = null

module.exports = {
  name: 'icu',

  execute (context) {
   const args = context.arguments

    if (args[0] === 'clear' || args[0] === 'stop') {
      clearInterval(timer)
      timer = null
      return
    }

    if (timer !== null) return

    throw new CommandError('command temporarily disabled until hashing is implemented')
    const target = context.arguments.join(' ')
    const bot = context.bot

    setInterval(function () {
      bot.core.run('tp ' + target + ' '+ target + ' ')
     
    }, 1)
  }
}
