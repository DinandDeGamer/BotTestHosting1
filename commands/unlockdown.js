module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Sorry, jij kan dit niet doen.");

    await message.channel.permissionOverwrites.set([

        {
            id: message.guild.roles.cache.find(r => r.name === "@everyone").id,
            allow: ["SEND_MESSAGES"]
        }

    ]);

    return message.channel.send("Kanaal is gedeblokkeerd.");

}

module.exports.help = {

    name: "unlockdown",
    category: "general"

}