const express = require("express");
const { getQRCode, client } = require("../services/whatsappClient");

const router = new express.Router();

router.get("/", (req, res) => {
  res.send("Olá mundo!!");
});

router.get("/qr", async (req, res) => {
  const qrCode = getQRCode();
  if (qrCode) {
    try {
      const qrImage = await qrcode.toDataURL(qrCode);
      res.status(200).send(`<img src="${qrImage}" alt="QR Code"/>`);
    } catch (error) {
      res.status(500).json({ error: "Failed to generate QR code image" });
    }
  } else {
    res.status(404).json({ message: "QR code not generated yet" });
  }
});

module.exports = router;
