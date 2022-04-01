import TelegramApi from "node-telegram-bot-api";
import config from "./config.js";

const bot = new TelegramApi(config.TOKEN, { polling: true });

bot.on("message", async ({ text, chat: { id } }) => {
  if (!!text.match(/javascript/gi)) {
    bot.sendPoll(id, "Is JavaScript perfect?", ["Sure", "Of course"]);
  }
});