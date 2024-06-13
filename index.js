const express = require('express')

const messageRouter = require('./routes/messageRouter')
const {client} = require('./services/whatsappClient')

client.initialize();

const app = express()


app.use(express.json())
app.use(messageRouter)


app.listen(process.env.PORT || 3000, () => {console.log('server is ready')})

module.exports = {app}
