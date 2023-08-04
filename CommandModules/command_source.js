class CommandSource {
  constructor (player, console = false) {
    this.player = player
    this.console = console
  }

  sendFeedback () {}

  sendError (message) {
    this.sendFeedback([{ text: '', color: 'green' }, message], false)
  }
}

module.exports = CommandSource
