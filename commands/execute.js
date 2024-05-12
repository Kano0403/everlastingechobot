const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { readFileSync } = require("fs");
const repl = require("repl");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('everlastingecho')
        .setDescription('Sends the messages to the specified channel')
        .addChannelOption(option =>
            option
                .setName('channel')
                .setDescription('The channel to send the messages to')
                .setRequired(true)
        )
        .setDefaultMemberPermissions(32),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const channel = interaction.options.getChannel('channel');
        console.log('executing')
        let file;
        try {
            file = readFileSync('/app/data/messages.tsv', 'utf8');
        } catch (e) {
            console.log(e)
            await interaction.reply(e)
        }
        console.log('st2')
        const messages = file.split('\n')
            .map(message => {
                const [author, content] = message.split('\t');
                return { author, content };
            })
        console.log('st3')
        console.log(messages)
        for (let message of messages) {
            const embed = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle(message.author)
                .setDescription(message.content);
            // console.log('st4')
            // console.log(message.author, ': ', message.content);
            await channel.send({ embeds: [embed] });
        }
        console.log('done')
    }
}
