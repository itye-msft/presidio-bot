# Presidio Bot
## Quick start
1. [Create a bot with Azure Bot Service
](https://docs.microsoft.com/en-us/azure/bot-service/bot-service-quickstart?view=azure-bot-service-4.0). This step will create a default "echo" bot in your subscription.
2. In the Bot Management section, click **Build**, scroll to the bottom of the page and click the **Open online code editor** link.
3. Replace the source code of the following files with code from this repo: `bot.js`, `packages.json`. Make sure to replace the `presidio endpoint` with your presidio api deployment in `bot.js`.
4. On the left menu, click **Open console**. Type in `npm install` to install missing packages. 
Your bot is now ready, you can go back to your bot resource page in the portal and experiment with it using the web chat or the emulator.