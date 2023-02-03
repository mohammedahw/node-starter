import "express-async-errors";
import express from "express";
import { router } from "./routers";
import * as dotenv from "dotenv";
import morgan from "morgan";
import { PORT } from "./utils/config";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// router
app.use("/api", router);

// error handler
app.use(errorHandler);

// start server
app.listen(PORT, () => {
  console.log("Server started on port 3000");
});
