module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.reply("Gelieve sps <steen, papier, schaar>");

    var options = ["steen", "papier", "schaar"];

    var result = options[Math.floor(Math.random() * options.length)];

    switch (args[0].toUpperCase()) {

        case "STEEN":

            switch (result) {

                case "steen":

                    return message.channel.send(`Ik heb ${result} 🗿, het is gelijkspel.`);

                    break;

                case "papier":

                    return message.channel.send(`Ik heb ${result} 🗒, ik win.`);

                    break;

                case "schaar":

                    return message.channel.send(`Ik heb ${result} ✂, jij wint.`);

                    break;
            }

            break;

        case "PAPIER":


            switch (result) {

                case "steen":

                    return message.channel.send(`Ik heb ${result} 🗿, jij wint.`);

                    break;

                case "papier":

                    return message.channel.send(`Ik heb ${result} 🗒, het is gelijkspel.`);

                    break;

                case "schaar":

                    return message.channel.send(`Ik heb ${result} ✂, ik win.`);

                    break;
            }

            break;

        case "SCHAAR":



            switch (result) {

                case "steen":

                    return message.channel.send(`Ik heb ${result} 🗿, ik win.`);

                    break;

                case "papier":

                    return message.channel.send(`Ik heb ${result} 🗒, jij wint.`);

                    break;

                case "schaar":

                    return message.channel.send(`Ik heb ${result} ✂, het is gelijkspel.`);

                    break;
            }

            break;

        default:

            return message.channel.send("Gebruik steen, papier of schaar a.u.b.");

    }

}

module.exports.help = {

    name: "sps",
    category: "general"

}