module.exports = {
    name: "prune",
    aliases: ["eat", "bulkdelete"],
    description: "bulk delete n amount of messages",
    args: true,
    usage: "[amount to prune]",
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('That doesn\'t seem to be a valid number.');
        }

        if (amount <= 1) {
            return message.reply("That number is a bit low don't you think?");
        } else if (amount > 100) {
            return message.reply("Let's try a smaller amount");
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
        });
    },
};