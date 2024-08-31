import express from "express";
import dotenv from "dotenv";
import goalRotes from "./routes/goalRoutes.js";
import { errorHandler } from "./middlware/errorHandler.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use("/api/goals", goalRotes);

// routes.get("/api/goals", (req, res) => {
//   //   res.send("Get Goals");
//   res.status(200).json({ message: "Get Goals" });
// });

app.listen(PORT, () => console.log("PORT:", PORT));
