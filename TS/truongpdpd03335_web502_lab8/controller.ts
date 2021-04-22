import { Request, Response } from 'express';
import { User } from './model/user'


export let users = (req: Request, res: Response) => {
	let users = [
		new User('James', 'jcoonce', 'james@gmail.com'),
		new User('DAVID', 'JumJohn', 'DAVID@gmail.com'),
		new User('Normal', 'jcoonce', 'Normal@gmail.com'),
	]
	res.json(users);
}

export let create = (req: Request, res: Response) => {
	res.json(req.body)
}