import express from "express";
import { upload } from "./middleware/multerMiddleware.js";
import { uploadToCloudinary } from "./config/cloudinary.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

app.post("/upload", upload.single("dp"), (req, res) => {
  console.log("file---->", req.file);
  uploadToCloudinary(req.file.path);
  return res.json({ message: "hello" });
});

app.listen(PORT, () => console.log("listening ..." + PORT));
