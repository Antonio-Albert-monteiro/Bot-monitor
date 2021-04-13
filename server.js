const express = require('express');
const app = express();


app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

app.get("/vote", (request, response) => {
  response.status(200).send({
      info: "voto comcluido com sucesso"
  })
});

app.listen(process.env.PORT);