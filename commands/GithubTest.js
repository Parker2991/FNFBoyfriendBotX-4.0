const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'githubtest',

  execute (context) {    
    context.source.sendFeedback('if this command runs coding in github works!', false)
    
  }
}
