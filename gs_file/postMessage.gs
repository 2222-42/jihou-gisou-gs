function sendToSlack() {
  // To behave as user, use OAuth Access Token which has `chat:write` of User Token Scopes.
  const url = "https://slack.com/api/chat.postMessage?token=xxx-xxxx-xxx-xxx-xxx"
  const headers = {
    "contentType" : "application/json",
  }

  // Insert your messages.
  var sample_message = ['Hi Boss, I'm fine.', 'Hi, I'm so busy.', 'Not good.']

  // Get and replace slack channels's id in your workspace(`CHANNEL_ID`) and your boss's id(`BOSS_USER_ID`)
  const data = {
    "channel" : 'CHANNEL_ID',
    "text" :  "<@BOSS_USER_ID> " + sample_message[Math.floor(Math.random() * sample_message.length)],
  }
  const options = {
    "method" : "POST",
    "headers": headers,
    "payload": data,
  };
  const response = UrlFetchApp.fetch(url, options);
  Logger.log(response)
}