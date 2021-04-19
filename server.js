const express = require('express');
const app = express();

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

app.get("/monitor1", (request, response) => {
  console.log(`Ping recebido do monitor1`);
  response.sendStatus(200);
});

app.get("/monitor2", (request, response) => {
  console.log(`Ping recebido do monitor2`);
  response.sendStatus(200);
});

app.get("/monitor3", (request, response) => {
  console.log(`Ping recebido do monitor3`);
  response.sendStatus(200);
});

app.get("/monitor4", (request, response) => {
  console.log(`Ping recebido do monitor4`);
  response.sendStatus(200);
});

app.get("/monitor5", (request, response) => {
  console.log(`Ping recebido do monitor5`);
  response.sendStatus(200);
});

app.get("/monitor6", (request, response) => {
  console.log(`Ping recebido do monitor6`);
  response.sendStatus(200);
});

app.get("/monitor7", (request, response) => {
  console.log(`Ping recebido do monitor7`);
  response.sendStatus(200);
});

app.get("/monitor8", (request, response) => {
  console.log(`Ping recebido do monitor8`);
  response.sendStatus(200);
});

app.listen(process.env.PORT);