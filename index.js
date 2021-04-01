const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const axios = require("axios");

client.on('ready', () => {
    const data = axios({
        url: "https://testapi.antonio9594.repl.co/",
        headers: {'accept': 'application/json'}
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.error(error)
    })
})

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token