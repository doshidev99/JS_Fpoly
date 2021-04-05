
/* Q2 🚀🚀🚀🚀*/
interface Named {
	readonly name?: string;
	ouputName?: string;
}

interface Greatable extends Named {
	greet(phrase: string): void;
}

class Person implements Greatable {
	greet(phrase: string): void {
		// eslint-disable-next-line no-console
		console.log(phrase, '<----');
	}
}

// let users1: Greatable = new Person();

// users1.greet('hi thre - i am');

// console.log(users1, '<----');

