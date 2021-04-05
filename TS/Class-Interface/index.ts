/* 
	An class in typescript
	constructor
	properties
	methods
 */

class Department {
	name: string;
	constructor(n: string) {
		this.name = n;
	}

	describe() {
		return `${this.name} <----`
	}

	showName() {
		return 'show name\'s Department'
	}
}

// new : create instance of class

const accounting = new Department('accounting');


console.log('----Extends 🚀 ----');

/* 
	extends
		- single
		- multiple : not supported in ts
		- multi-level
*/

class Person extends Department {
	roles: string[];
	constructor(_name: string, roles: string[]) {
		super(_name); // required call super() : excute constructor of parent
		this.roles = roles;
	}

	showRole() {
		console.log(this.name, '<----');
		console.log(super.showName(), '<----');
		return this.roles;
	}
}

const ps1 = new Person('truog', ['admin', ''])

console.log(ps1.showRole(), '<----');


console.log('----Protected 🚀----');


class D1 {
	/* 
	protected just only access its class and children class extends class defined 
*/
	protected nameProtected: string;
	constructor(_nameProtected: string) {
		this.nameProtected = _nameProtected;
	}
}

class C1 extends D1 {
	display(): void {
		// eslint-disable-next-line no-console
		console.log(this.nameProtected, '-->>>this.nameProtected');
	}
}

let it: C1 = new C1('it protected');

it.display();


console.log('----Static  🚀----');


class CStatic {
	static id: string;
	private name: string;

	constructor(id: string, name: string) {
		CStatic.id = id;
		this.name = name;
	}

	static describe(_name: string) {
		console.log(`Method static has access outside class! id static: ${CStatic.id} -  ${_name}`);
	}
}

/* 
	when properties or method has `declare` is `Static` -> data has direct query in class 
	without using keywords `this` 
	and access outside but not use the `new` key word to create `instance`
*/
CStatic.id = "d1";

CStatic.describe('Max');


console.log('----Abstract class  🚀----');

/*
	abstract class : a parent class with all class the both nature ( bản chất ) (type, mission: nhiệm vụ .. )
*/


abstract class abClass {
	static year = 2021;
	constructor(protected readonly id: string, public name: string) {

	}

	static createEmployee(name: string) {
		return { name }
	}

	abstract decribe(this: abClass): void;

}


class nabClass extends abClass {
	admins: string[];

	constructor(id: string, admins: string[]) {
		super(id, 'IT');
		this.admins = admins;
	}

	decribe() {
		return `Value of: ${this.id}`
	} // required
}


let nAb: nabClass = new nabClass('t1', ['admin', 'users'])

console.log(nAb.decribe());
