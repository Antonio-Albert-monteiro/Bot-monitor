const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const axios = require("axios");

var fun = null;

function tesu() {
  fun = setInterval(apiall, 9000);
}

function apiall() {
    const data = axios({
        url: "https://testapi.antonio9594.repl.co/",
        headers: {'accept': 'application/json'}
    }).then((result) => {
        console.log(result.data)
    }).catch((error) => {
        console.error(error)
    })
}

tesu();

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token