import express, { json } from "express";
const app = express();
import cors from "cors";
import dotevn from "dotenv";
const Port = process.env.PORT || 3500;
import authRouter from "./Routers/Auth.js";
import ConnectDb from "./config/ConnectDb.js";
import ProductRouter from "./Routers/Products.js";


ConnectDb();

app.get("/", (req, res) => {
  res.send("hey this is boys , girls");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/auth", ProductRouter);

app.listen(Port, () => {
  console.log(`http://localhost:${Port}`);
});
