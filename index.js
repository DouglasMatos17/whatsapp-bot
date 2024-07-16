import express, { json } from "express";
import cors from "cors";
import messageRouter from "./routes/messageRouter.js";
import { client }  from "./services/whatsappClient.js";

client.initialize();

const app = express();
const port = 3050

app.use(cors());

app.use(json());
app.use(messageRouter);

app.listen(process.env.PORT || port, () => {
  console.log(`local server running at the address http://localhost:${port}`);
});
