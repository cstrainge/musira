
import * as path from 'path';
import express from 'express';

const app: express.Application = express();


const clientBasePath = path.resolve(path.join(__dirname, 'client'));

const indexPath = path.join(clientBasePath, "index.html");
const jsDirPath = path.join(clientBasePath, 'static', 'js');


// Going to the site root serves up index.html
app.get('/', (request: express.Request, response: express.Response) => {
    console.log(`Sending ${indexPath}.`);
    response.sendFile(indexPath);
});


// Serve up all our JavaScript.
app.use('/static/js', express.static(jsDirPath));

// Fire up the server itself.
app.listen(8008);
