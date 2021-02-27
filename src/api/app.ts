import "reflect-metadata";
import express from "express";
import * as bodyParser from "body-parser";
import route from "./routes/routes";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(route);

export { app };