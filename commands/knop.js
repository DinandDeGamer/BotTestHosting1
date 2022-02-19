const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const row = new discord.MessageActionRow().addComponents(



        new discord.MessageButton()
            .setCustomId("Test")
            .setLabel("TEST")       // Normaal
            .setStyle("PRIMARY")
            .setDisabled(true),



        new discord.MessageButton()
            .setCustomId("grijs")
            .setLabel("grijs!!")     // Normaal
            .setStyle("SECONDARY")
            .setDisabled(false),



        new discord.MessageButton()
            .setCustomId("groen")
            .setLabel("GROEN!!")     // Groen
            .setStyle("SUCCESS")
            .setDisabled(false),



        new discord.MessageButton()
            .setCustomId("rood")
            .setLabel("rood!!")     // Rood
            .setStyle("DANGER")
            .setDisabled(false),



        new discord.MessageButton()
            .setLabel("Link")      // Link
            .setStyle("LINK")
            .setURL("https://discord.com/")
            .setDisabled(false)

    );

    message.channel.send({ content: "Test bricht", components: [row] });

}

module.exports.help = {

    name: "knop",
    category: "general"

}