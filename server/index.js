import express from "express";
import dotenv from "dotenv";
import connected from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"
import journalRoutes from "./routes/journalRoutes.js"

const app = express();

dotenv.config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // Parses form data
app.use(cors());

app.get("/", (re, res) => {
  res.json({ name: "Sooraj" });
});

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes)
app.use("/api/user", journalRoutes);

async function startServer() {
  const isConnected = await connected(); // Await the database connection result

  if (!isConnected) {
    console.log("DB connection error! Server not starting.");
    return;
  } else console.log("Connected to db");

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}
startServer();
