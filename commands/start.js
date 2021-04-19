const firebase = require("firebase");
const Discord = require("discord.js");

const database = firebase.database();

exports.run = async (client, message, args) => {
    if (message.channel.type == "DM") return;
    if (message.author.bot) return;
    
    database
    .ref(`Usuarios/${message.author.id}`)
    .once("value")
    .then(async function(db) {
        try {
            let link = db.val().link
            
            if (true) {
                let funic;
                
                function logi() {
                    let funic = setInterval(roy, 300000)
                }
                function roy() {
                    let daate = axios({
                        url: `${link}`,
                        headers: {'accept': 'application/json'}
                    }).then ((result) => {
                        console.log(result.data);
                    }).catch({error} => {
                        console.log("errro 2")
                    })
                    }
                }
                logi();
            }
        } catch (e) {
            console.log("erro de fora")
        }
}