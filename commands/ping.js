module.exports = {
    name: "ping",
    aliases: ["nugspeed"],
    description: "Ping!",
    args: false,
    usage: "",
    execute(message, args) {
        message.channel.send("Pong.");
    },
};