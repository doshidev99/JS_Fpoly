/* Q1 🚀🚀🚀🚀 */

interface AddFn {
	(a: number, b: number): number;
}


let add: AddFn;

add = (n1: number, n2: number) => n1 + n2

/* Q2 🚀🚀🚀🚀*/

interface Named {
	readonly name?: string;
	ouputName?: string;
}

interface Greatable extends Named {
	greet(phrase: string): void;
}

let users1: Greatable;


class Person implements Greatable {
	greet(phrase: string): void {
		// eslint-disable-next-line no-console
		console.log(phrase, '<----');
	}
}

users1 = new Person();

users1.greet('hi thre - i am');

// eslint-disable-next-line no-console
console.log(users1, '<----');




/*  Q3 🚀🚀🚀🚀 */


abstract class Department {
	static fiscalYear = 2020;

	protected employees: string[] = [];

	constructor(protected readonly id: string, public name: string) { }


	static createEmployee(name: string) {
		return { name }
	}


	abstract describe(this: Department): void;


	addEmployee(employee: string) {
		this.employees.push(employee)
	}


	printEmployee(employee: string) {
		this.employees.push(employee)
	}


	printEmployeeInfomation() {
		// eslint-disable-next-line no-console
		console.log(this.employees.length, '<----');
		console.log(this.employees, '<----');
	}
}


class IT1 extends Department {
	admins: string[];
	constructor(id: string, admins: string[]) {
		super(id, "it");
		this.admins = admins;
	}

	describe() {
		console.log('It deparment - Id ', this.id)
	}
}


const employee1 = Department.createEmployee('Max');

// eslint-disable-next-line no-console
console.log(employee1, '<----', Department.fiscalYear);


const it = new IT1('d1', ['Max'])

it.addEmployee('MAX')
it.addEmployee('Manu')
it.addEmployee('David')