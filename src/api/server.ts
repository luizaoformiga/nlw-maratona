import "reflect-metadata";
import { createConnection } from 'typeorm';
import { app } from './app';

createConnection().then(async () => {
    const port = 3838;

    app.listen(port, () => console.log('API listering to port http://localhost:3838'));

}).catch(error => console.log("NOT FOUND:  " + error));

