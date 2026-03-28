import express from "express"
import cors from "cors"
import {config} from "dotenv"
import { errorHandler } from "./utils/errorHandler.js";
export const app = express();

config({
    path: "./config/config.env",
})
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(errorHandler)
