import express from 'express';
import path from 'path';
import { Request, Response } from 'express'

const app = express();

app.set('view engine', 'ejs'); // choice engine -> ejs

app.set('views', 'templates'); // contain views -> template

app.use('/assets', express.static(path.join("dist/frontend"))) // concat

app.use('/', express.static(path.join('public'))) // use content inside folder public

app.get('/board', (req: Request, res: Response) => {
	res.render('index', {});
})


app.get('/login', (req: Request, res: Response) => {
	res.render('login', {});
})

const port: number = 3001;

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(port, '<-server running---');
})