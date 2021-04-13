const firebase = require("firebase");
const Discord = require("discord.js");

const database = firebase.database();

exports.run = async (client, message, args) => {
    if (message.channel.type == "DM") return;
    if (message.author.bot) return;
    
    let link1 = args[0];
    let autho = (`${message.author.username}`)
    
    database
    .ref(`Usuarios/${message.author.id}`)
    .once("value")
    .then(async function(db) {
        if (db.val() == null) {
            database
            .ref(`Usuarios/${message.author.id}`)
            .set({
                name: autho,
                link: link1
            })
        } else {
            database
            .ref(`Usuarios/${message.author.id}`)
            .update({
                name: autho,
                link: link1
            })
        }
    })
}