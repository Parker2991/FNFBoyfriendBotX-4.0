const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'romncitrash',
  execute (context) {    
    for (let i = 0; i < 4; i++) context.source.sendFeedback('ROMNCI IS A SKID', false)
  }
}