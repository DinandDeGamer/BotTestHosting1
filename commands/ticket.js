const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryID = "943941750110687292";

    var userName = message.author.username;

    var userDiscriminator = message.author.discriminator;

    var reason = args.join(" ");

    var ticketBestaat = false;

    message.guild.channels.cache.forEach((channel) => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {

            message.channel.send("Je hebt al een ticket gemaakt.");

            ticketBestaat = true;

            return;

        }

    });

    if (ticketBestaat) return;

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: "text" }).then((createdChan) => {

        createdChan.setParent(categoryID).then((settedParent) => {


            settedParent.permissionOverwrites.edit(message.guild.roles.cache.find(x => x.name === "@everyone"), {

                SEND_MESSAGES: false,
                VIEW_CHANNEL: false

            });


            settedParent.permissionOverwrites.edit(message.author.id, {
                CREATE_INSTANT_INVITE: false,
                READ_MESSAGE_HISTORY: true,
                SEND_MESSAGES: true,
                ATTACH_FILES: true,
                CONNECT: true,
                ADD_REACTIONS: true
            });


            settedParent.permissionOverwrites.edit(message.guild.roles.cache.find(x => x.name === "Staff"), {
                CREATE_INSTANT_INVITE: false,
                READ_MESSAGE_HISTORY: true,
                SEND_MESSAGES: true,
                ATTACH_FILES: true,
                CONNECT: true,
                ADD_REACTIONS: true
            });

            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = `${dd}/${mm}/${yyyy}`;

            let embedParent = new discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL({ size: 4096 }))
                .setTitle('Niew ticket')
                .addFields(
                    { name: "Reden", value: reason, inline: true },
                    { name: "Aangemaakt op:", value: today, inline: true }
                );

            message.channel.send('✅ De ticket is aangemaakt ✅');

            settedParent.send({ embeds: [embedParent] });


        })

    });

}
module.exports.help = {

    name: "ticket",
    category: "staff"

}