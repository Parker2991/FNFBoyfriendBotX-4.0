class CommandSource {
  constructor (player) {
    this.player = player
  }

  sendFeedback () {}

  sendError (message) {
    this.sendFeedback([{ text: '', color: 'green' }, message], false)
  }
}

module.exports = CommandSource
