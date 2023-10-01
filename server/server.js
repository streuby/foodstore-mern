import express, { json } from "express";
import path from "path";
import cors from "cors";
import { config } from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import { readdirSync } from "fs";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import addonRoutes from "./routes/addonRoutes.js";
import attributeRoutes from "./routes/attributeRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import couponRoutes from "./routes/couponRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import stripeRoutes from "./routes/stripeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import variableRoutes from "./routes/variableRoutes.js";
import currencyRoutes from "./routes/currencyRoutes.js";
import paystackRoutes from "./routes/paystackRoutes.js";
import flutterwaveRoutes from "./routes/flutterwaveRoutes.js";

config();
const app = express();

const routes = [
  addonRoutes,
  attributeRoutes,
  authRoutes,
  cartRoutes,
  categoryRoutes,
  couponRoutes,
  orderRoutes,
  productRoutes,
  stripeRoutes,
  userRoutes,
  variableRoutes,
  currencyRoutes,
  paystackRoutes,
  flutterwaveRoutes,
];

connectDB();
app.use(cors());
app.use(json({ limit: "2mb" }));

app.get("/", (req, res) => {
  res.send("API is running....");
});

// routes middleware -auto load
const __dirname = path.resolve();
routes.map((r) => app.use("/api", r));

// console.log("testing __dirname: ", path.join(__dirname, "/server/routes"));

// Deployment configuration
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  // Only required at development environment
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// console.log("testing obj: ", obj);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running at port ${PORT}`.yellow.bold));
