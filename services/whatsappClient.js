const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  webVersionCache: {
    type: "remote",
    remotePath:
      "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
  },
  authStrategy: new LocalAuth(),
});

let qrcodeData = null;

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("qr", (qr) => {
  qrcodeData = qr;
  console.log("QR code received", qr);
});

client.on("message", (message) => {
  try {
    if (message.from != "status@broadcast") {
      console.log(`Received message: ${message.body}`);
      client.sendMessage(message.from, "Bem vindo ao bot do whatsapp");
    }
  } catch (error) {
    console.log(error);
  }
});

const getQRCode = () => qrcodeData;

module.exports = { client, getQRCode };
