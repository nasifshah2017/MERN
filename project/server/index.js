import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

const app = express();

/*  const cors = require("cors");
const corsOptions ={
    origin:"http://localhost:3000",
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}; */

dotenv.config();

app.use(bodyParser.json({limit: "32mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}))
app.use(cors());
// app.use(cors(corsOptions));
app.use("/posts", postRoutes);

const CONNECTION_URL = "mongodb+srv://nasifshah544:WordPress2020@cluster0.agbus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
  .catch(err => console.log(err.message))
