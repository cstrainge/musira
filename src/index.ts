
import * as path from 'path';
import express from 'express';

const app: express.Application = express();


app.get('/', (request: express.Request, response: express.Response) => {
    const indexPath = path.join(__dirname, '..', "index.html");
    console.log(`Sending ${indexPath}.`);

    response.sendFile(indexPath);
});

app.listen(8008);
