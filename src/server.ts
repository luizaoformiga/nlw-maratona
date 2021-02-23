const express = require('express');

const app = express();
const port = 8007;

app.get('/', (request: Request, response: Response) => {
    return response.json();
})

app.listen(port, () => console.log("API listering to port http://localhost:8007"));