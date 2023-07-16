const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'say',
//
  execute (context) {
    const message = context.arguments.join(' ')

    const prefix = {
      translate: '[%s%s%s%s][%s][%s][%s] ',
      bold: true,
      color: 'dark_gray',
      with: [
       { color: 'dark_purple', text: 'FNF' },
          { color: 'aqua', text: 'Boyfriend' },
          { color: 'dark_red', text: 'Bot' },
          { color: 'black', text: 'X' },
          { color: 'black', text: 'Ultimate' },
          { color: 'green', text: '4.0 Alpha' },
        { color: 'green', text: 'Part 2' },
      ]
    }

    context.bot.tellraw(['', prefix, message])
  }
}
