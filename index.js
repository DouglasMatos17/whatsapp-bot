const express = require("express");
const cors = require("cors");
const messageRouter = require("./routes/messageRouter");
const { client } = require("./services/whatsappClient");

client.initialize();

const app = express();

app.use(cors());

app.use(express.json());
app.use(messageRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("server is ready");
});
