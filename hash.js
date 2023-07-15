let code = null;
//iucc lended this code but should we use it?
function regenCode() {
  const date_time = new Date();
  const date = ("0" + date_time.getDate()).slice(-2);
  const month = ("0" + (date_time.getMonth() + 1)).slice(-2);
  const year = date_time.getFullYear();
  const hours = date_time.getHours();
  const minutes = date_time.getMinutes();
  const seconds = date_time.getSeconds();
  //where do we put this file?
  code = generateRandomHash()
  client.channels.cache.get('1120122720001208390').send('`'+year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds+"`"+code)
}
//it is cold in here jesus
function generateRandomHash() {
  var crypto = require('crypto');
  return crypto.randomBytes(6).toString('hex');
}
module.exports = validation//???