import "reflect-metadata";
import { createConnection } from 'typeorm';
import { app } from './app';

createConnection().then(async () => {
    const port = 3338;

    app.listen(port, () => console.log('API listering to port http://localhost:3338'));

}).catch(error => console.log("NOT FOUND:  " + error));

