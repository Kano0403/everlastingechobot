# Everlasting Echo Bot
This is a bot that sends messages as embeds into a channel specified when the command is executed.

## Setup
2 files need to be created to use this bot:
- `config.json` - Config information as a JSON with the following fields:
  - `token` - The bot's token
  - `clientId` - The bot's client ID
  - `guildId` - The ID of the guild the bot should work in
- `messages.tsv` - The messages to send, formatted as a TSV with the following fields:
  - `author` - The person that the message is from
  - `message` - The message to send

## Usage
`/everlastingecho <channel>`
- `<channel>` is the channel to send the messages to.
- The bot will send the messages from `messages.tsv`

#### **There are currently no plans to update the bot. Feel free to modify as fits your needs.*
