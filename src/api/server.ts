import "reflect-metadata";
import { createConnection } from 'typeorm';

import express from "express";
import * as bodyParser from "body-parser";
import route from "./routes/routes";
import cors = require('cors');

createConnection().then(async () => {
    const app = express();
    const port = 3338;

    app.use(express.json());
    app.use(bodyParser.json());
    app.use(cors());
    app.use(route);
    app.listen(port, () => console.log('API listering to port http://localhost:3338'));

}).catch(error => console.log("NOT FOUND:  " + error));


