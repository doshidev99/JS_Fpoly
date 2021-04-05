
class CStatic {
	static id: string;
	private name: string;

	constructor(id: string, name: string) {
		CStatic.id = id;
		this.name = name;
	}

	static describe(_name: string) {
		console.log(`Method static has access outside class! id static: ${CStatic.id} -  ${_name} - ${this.name}`);
	}
}


class Abc extends CStatic {
	constructor(id: string, name: string) {
		super(id, name);
	}
}

let nCs = new Abc('123', 'truong');


Abc.describe('abc');