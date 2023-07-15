const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'cloopcrash',
  
  execute (context) {
   throw new CommandError('command temporarily disabled until hashing is implemented')

    const bot = context.bot
timer = setInterval(function () {
    bot.core.run(`execute as @e${' as @p[limit=99]'.repeat(Math.floor((32767 - 22) / 16))} run help`)
   }, 1)
  }
}




//what is wi
// IDK