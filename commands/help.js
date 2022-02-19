const botConfig = require("../botConfig.json");

module.exports.run = async (client, message) => {

    try {

        var prefix = botConfig.prefix;

        var respone = "**Bot commands**\r\n\n";
        var general = "**__Algemeen__**\r\n";
        var info = "**__Info__**\r\n";
        var staff = "**__Admin__**\r\n\n";
        
        client.commands.forEach(command => {

            switch (command.help.category) {

                case "general":
                    general += `${prefix}${command.help.name}\r\n`;
                    break;

                case "info":
                    info += `${prefix}${command.help.name}\r\n`;
                    break;

            }

        });

        respone += general + info;

        message.author.send(respone).then(() => {

            return message.reply("Alle commands kan je vinden in je privé brichten.");

        }).catch(() => {

            return message.reply("Je privé brichten staan uit!");

        })

    } catch (error) {
        message.reply("Er is iets misgegaan.");
    }

}

module.exports.help = {

    name: "help",
    category: "info"

}