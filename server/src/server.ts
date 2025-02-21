import cors from 'cors';
import express from 'express';
import { Express, Request, Response } from 'express';

import dotenv from 'dotenv';
import path from 'path';

import Favicon from './assets/favicon.svg'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

let corsOptions = {
	origin: [`${process.env.ORIGIN_DOMAIN}`], //Разрешаю делать запросы только с данного url
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../assets')));

app.get('/favicon', (req: Request, res: Response) => {
	res.send(Favicon);
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});