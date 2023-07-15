const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'skids',

  execute (context) {    
   context.source.sendFeedback('Knownskids:Romnci,Logintimedout(Mabe)', false)    
  }
}
