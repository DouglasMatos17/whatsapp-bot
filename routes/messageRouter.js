import { Router } from "express";
import { getQRCode }  from "../services/whatsappClient.js";

const router = new Router();

router.get("/", (req, res) => {
  res.send("Olá mundo!!");
});

router.get("/qr", async (req, res) => {
  const qrCode = await getQRCode();
  res.send(qrCode);
});
export default router;
