const express = require("express");
const { getQRCode, client } = require("../services/whatsappClient");

const router = new express.Router();

router.get("/", (req, res) => {
  res.send("Olá mundo!!");
});

router.get("/qr", async (req, res) => {
  const qrCode = await generateQRCode();
  res.send(qrCode);
});
module.exports = router;
