import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
