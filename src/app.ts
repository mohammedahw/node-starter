import "express-async-errors";
import express from "express";
import { router } from "./routers";
import * as dotenv from "dotenv";
import morgan from "morgan";
import { PORT } from "./config/env";
import { errorHandler } from "./middlewares/error-handler";

const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// router
app.use("/api", router);

// error handler
app.use(errorHandler);

// start server
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
