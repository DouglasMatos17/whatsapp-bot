const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  puppeteer: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
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

client.on("message", async (message) => {
  try {
    if (message.from != "status@broadcast") {
      console.log(`Received message: ${message.body}`);
      await handleIncomingMessage(message);
    }
  } catch (error) {
    console.log(error);
  }
});

const handleIncomingMessage = async (message) => {
  const text = message.body.toLowerCase();
  let response = "";

  if (text.includes("menu")) {
    response =
      "Aqui está nosso menu:\n1. Margherita - R$25\n2. Pepperoni - R$30\n3. Portuguesa - R$28\n4. Calabresa - R$27\n5. Quatro Queijos - R$32";
  } else if (text.includes("pedido") || text.includes("order")) {
    response =
      'Para fazer um pedido, por favor envie: "Quero pedir [nome da pizza]".';
  } else if (text.includes("quero pedir")) {
    const order = text.replace("quero pedir", "").trim();
    response = `Seu pedido de ${order} foi recebido! Em breve enviaremos uma confirmação.`;
  } else {
    response =
      'Bem-vindo ao bot da Pizzaria! Você pode perguntar pelo "menu" ou fazer um "pedido".';
  }

  await client.sendMessage(message.from, response);
};

const getQRCode = () => qrcodeData;

module.exports = { client, getQRCode };
