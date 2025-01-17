import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/FoodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import adminRouter from "./routes/admingRoute.js";

// app config
const app = express();
const port = process.env.port || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// API endPoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
