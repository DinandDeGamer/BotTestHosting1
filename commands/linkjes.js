const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const row = new discord.MessageActionRow().addComponents(



        new discord.MessageButton()
            .setLabel("YT DinandDeGamer")      // Link
            .setStyle("LINK")
            .setURL("https://www.youtube.com/channel/UC9mC2X9btiGihUqbKjvC8XA")
            .setDisabled(false),



        new discord.MessageButton()
            .setLabel("YT MimachuGames")      // Link
            .setStyle("LINK")
            .setURL("https://www.youtube.com/channel/UC2S-A-rJxyp0BJBdCvYdXIQ")
            .setDisabled(false)

    );

    message.channel.send({ content: "Test bricht", components: [row] });

}

module.exports.help = {

    name: "linkjes",
    category: "info"

}