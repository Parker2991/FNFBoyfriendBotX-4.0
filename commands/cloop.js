const CommandError = require('../CommandModules/command_error')
//var validate = require('../CommandModules/hash')
//let timer = null

module.exports = {
  name: 'cloop',
  timer: null,

  execute (context) {
  //  throw new CommandError('command temporarily disabled until hashing is implemented')

    const args = context.arguments

    if (args[0] === 'clear' || args[0] === 'stop') {
      clearInterval(this.timer)
      this.timer = null

      context.source.sendFeedback('Cloop Stopped', false)
      return
    }

    
    if (this.timer !== null) throw new CommandError('The bot can currently only loop one command')

    const bot = context.bot
    const command = args.join(' ')

    this.timer = setInterval(function () {
      bot.core.run(command)
    }, 1)
  }
}
