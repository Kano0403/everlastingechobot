# Everlasting Echo Bot
This is a bot that sends messages as embeds into a specified channel.

## Setup
### Things need to be setup to use this bot:
#### 1. Messages File
`messages.tsv` - The messages to send, formatted as a TSV with the following fields: 
- `author` - The person that the message is from
- `message` - The message to send

#### 2. Local .env File
The most common way to do this is to make a file called `.env`. This file must have 3 lines, with your discord token and the path to the folder containing your `messages.tsv` file after each `=` respectively. The `docker_repo` needs to be the repository of the image (`library` for local, your docker username for dockerhub, etc)
```
DISCORD_TOKEN=
MESSAGES_FOLDER=
DOCKER_USERNAME=
```
Then, run these commands to make the variables available:
- `set -a` (no output)
- `source .env` (no output)

## Usage
### Initialize the bot
Before you can proceed with either option below, you must initialize the slash commands in the server(s) you want to use the bot in. To do this, open `deploy.js` and replace `clientId` and `guildId` with the values for your bot and server. Then you can run `node deploy.js`

### With Docker:
Ensure that the machine you are using has docker compose installed and properly configured. I recommend [DigitalOcean's tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04) on how to do so as it is easy to follow.
1. Pull the docker image from dockerhub by using `docker pull kano0403/everlastingechobot:latest` anywhere on the system.
2. `cd` into the directory containing your project (specifically the docker-compose.yml file)
3. Run `docker compose up -d`. To stop the bot, run `docker compose down`

### Without Docker:
Ensure that the machine you are using has node.js of version 19 or higher and is properly configured.
1. Run `npm install`
2. Run `node main.js`. The window this is run in must stay open in order for the bot to run. I recommend `screen` for leaving the bot running on linux.

[//]: # (**Before running the bot, make sure to run `deploy.js` to initialize the slash command in the target server.*)
`/everlastingecho <channel>`
- `<channel>` is the channel to send the messages to.
- The bot will send the messages from `messages.tsv`

#### **There are currently no plans to update the bot. Feel free to modify as fits your needs.*
