require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const TelegramBot = require('node-telegram-bot-api');

// Replace YOUR_API_KEY with your OpenAI API key
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API
});
const openai = new OpenAIApi(configuration);

// Replace YOUR_BOT_TOKEN with your Telegram bot's API key
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {polling: true});

bot.onText(/\/ai (.+)/, async(msg) => {
  const chatId = msg.chat.id;
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: msg.text,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  bot.sendMessage(chatId, completion.data.choices[0].text);
})

  console.log("----- CORRIENDO BOT OPEN AI ----- ")