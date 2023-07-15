const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'undefined',

  execute (context) {    
    context.source.sendFeedback('Unknown command: undefined', false)
    
  }
}
