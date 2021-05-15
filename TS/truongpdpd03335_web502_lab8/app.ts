import { Product } from './model/product.model';
import { validate, Length } from 'class-validator';
import 'reflect-metadata'

import { plainToClass } from 'class-transformer'
import express, { Request, Response, NextFunction } from 'express'

import bodyParser, { json } from 'body-parser'

import * as controller from './controller'

const app = express();

app.use(json());

app.use(bodyParser.urlencoded({ extended: true }))


const router = express.Router();


app.use('/route', router);

router.get('/', (req: Request, res: Response) => {
	res.send('hello world route with nodemon 1!')
})

router.get('/users', controller.users);

router.post('/users/create', controller.create)

// const products = [
// 	{
// 		title: 'A',
// 		price: 29.99
// 	},
// 	{
// 		title: 'B book',
// 		price: 29.99
// 	},
// ]

// const newProd = new Product('', 10);

// validate(newProd).then((errors) => {
// 	if (errors.length > 0) {
// 		console.log('valid')
// 		console.log(errors, '<----');
// 	} else {
// 		console.log(newProd.getInformation())
// 	}
// })