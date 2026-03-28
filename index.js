import express from "express"
import cors from "cors"
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errorHandler } from "./utils/errorHandler.js";
import users from "./routes/User.routes.js";
import notes from "./routes/Notes.routes.js";




export const app = express();



config({
    path: "./config/config.env",
})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api/v1/user", users);
app.use("/api/v1/note", notes);

app.use(cookieParser())
app.use(errorHandler)
