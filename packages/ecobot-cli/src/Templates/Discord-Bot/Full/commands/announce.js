const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions, MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('announce')
      .setDescription('Announce something to the server')
      .addStringOption(option =>
      		option.setName('input1')
      			.setDescription('Announcement')
      			.setRequired(true))
      .addStringOption(option =>
          option.setName('input2')
            .setDescription('Announcement Description')
            .setRequired(true)),
  async execute(interaction) {
    const toAnnounce = interaction.options.getString('input1');
    const announceDecription = interaction.options.getString('input2');

    const Announment = new MessageEmbed()
          .setColor('#0099ff')
          .setTitle(`${toAnnounce}`)
          .setDescription(`${announceDecription}`);

    await interaction.reply('Announce');
    await interaction.channel.send({ embeds: [Announment] });
  }
}
