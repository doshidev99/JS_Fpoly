function Logger(logString: string) {
	return function(constructor: Function) {
		console.log(logString);
		console.log(constructor);
	}
}


@Logger('Logging - person')


class Person{

	name = "Max";

	constructor() {
		console.log('Creating person object ... !')
	}
}


const pers = new Person();

console.log(pers);

