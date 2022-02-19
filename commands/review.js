const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // !review anntal bricht bricht bricht

    const amountStars = args[0];

    if (!amountStars || amountStars < 1 || amountStars > 5) return message.reply("Geef een ster tussen de 1 en 5");

    const messageReview = args.splice(1, args.length).join(" ") || '**Geen bricht megegeven.**';

    const reviewChannel = message.member.guild.channels.cache.get("943914408688619630");

    if (!reviewChannel) return message.reply("Kanaal niet gevonden");

    var stars = "";

    for (var i = 0; i < amountStars; i++) {

        stars += ":star: ";

    }

    message.delete();

    const review = new discord.MessageEmbed()
        .setTitle(`${message.author.username} heeft een review geschreven! 🎉`)
        .setColor("#00ff00")
        .setThumbnail("https://imgur.com/W45xcnA.png")
        .addField("Sterren:", `${stars}`)
        .addField("Review:", `${messageReview}`);

    message.channel.send("✅ Je hebt een review gemaakt. 🌐")

    return reviewChannel.send({ embeds: [review] });

}

module.exports.help = {

    name: "review",
    category: "info"

}