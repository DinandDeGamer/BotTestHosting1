module.exports.run = async (client, message, args) => {

    var values = ["Kop", "Munt"];

    var result = values[Math.floor(Math.random() * values.length)];

    return message.channel.send(`Je hebt **${result}** gekregen. 🔰`);

}

module.exports.help = {

    name: "KopOfMunt",
    category: "general"

}