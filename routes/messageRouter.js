const express = require('express')
const { getQRCode, client } = require('../services/whatsappClient')

const router = new express.Router()

router.get('/', (req, res) => {
    res.send('Olá mundo!!')
})

router.post('/message', (req, res) => {
    client.sendMessage(req.body.phoneNumber, req.body.message)
    res.send()
})

router.get('/qr', (req, res) => {
    const qrCode = getQRCode();
    if (qrCode) {
        res.status(200).json({ qrCode });
    } else {
        res.status(404).json({ message: 'QR code not generated yet' });
    }
});

module.exports = router