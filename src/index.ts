import express from "express";
import { router } from "./router";

const app = express();

// middlewares
app.use(express.json());

// router
app.use("/api", router);

// start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
