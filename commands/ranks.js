const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const options = [

        {
            label: "Test 1",
            value: "944274246278991894"
        },

        {
            label: "Test 2",
            value: "944274290721832960"
        },

        {
            label: "Test 3",
            value: "944274321201852476"
        }

    ];

    const row = new discord.MessageActionRow()

        .addComponents(

            new discord.MessageSelectMenu()

                .setCustomId("roles")
                .setMinValues(0)
                .setMaxValues(3)
                .setPlaceholder("Selecteer een rol")
                .addOptions(options)

        );

    return message.channel.send({ content: "Selecteer hier je rol", components: [row] })

}

module.exports.help = {

    name: "ranks",
    category: "general"

}