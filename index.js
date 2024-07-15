const express = require("express");
const cors = require("cors");
const messageRouter = require("./routes/messageRouter");
const { client } = require("./services/whatsappClient");

client.initialize();

const app = express();
const port = 3050

app.use(cors());

app.use(express.json());
app.use(messageRouter);

app.listen(process.env.PORT || port, () => {
  console.log(`local server running at the address http://localhost:${port}`);
});
