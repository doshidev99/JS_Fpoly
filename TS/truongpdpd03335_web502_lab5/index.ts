/* intersection Type */
/* phép giao */
type Admin = {
	name: string;
	privileges: string[]
}


type Employee = {
	name: string;
	startDate: Date;
}

type ElevatedEmployee = Admin & Employee;


/*
	Type Guard
	- bảo toàn
*/

class Car {
	drive() {
		console.log('Driving ....!');

	}
}


class Truck {
	drive() {
		console.log('Driving . a Truck...!');
	}

	loadCargo(amount: number) {
		console.log('Loading cargo......!', amount);
	}
}


type Vehicle = Car | Truck;

const v1 = new Car();

const v2 = new Truck();



function useVehicle(vehicle: Vehicle) {
	vehicle.drive();

	if (vehicle instanceof Truck) {
		// check vehicle have been create from Truck
		vehicle.loadCargo(1000)
	}
}


/* 
Discriminated unions
--- tiến trình

*/


interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';

	runningSpeed: number;
}

type Animal = Bird | Horse


function moveAnimal(animal: Animal) {
	let speed;
	switch (animal.type) {
		case 'bird':
			speed: animal.flyingSpeed;
			break;

		case 'horse':
			speed = animal.runningSpeed
	}
	console.log('Moving at speed:', speed);

}

moveAnimal({ type: 'horse', runningSpeed: 20 })


/* Generic */

function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB)
}

const a1 = { name: 'Max', hobiies: ['sports'] };
const b1 = { age: 20 };

const megedObj = merge(a1, b1);


console.log(megedObj, '<----');


/* Generic Class */


class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item)
	}

	removeITem(item: T) {
		if (this.data.indexOf(item) === -1) return
	}

	getITems() {
		return [...this.data]
	}
}


const textStorage = new DataStorage<string>();

textStorage.addItem('Max')
textStorage.addItem('David')
textStorage.removeITem('Max')
console.log(textStorage.getITems(), '<----');
