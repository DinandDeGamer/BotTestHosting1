module.exports.run = async (client, message, args) => {

    var statusTxt = args.join(" ");

    client.user.setPresence({

        status: "online",
        activities: [

            {

                name: statusTxt

            }

        ]

    });

    return;

}

module.exports.help = {

    name: "status",
    category: "general"

}