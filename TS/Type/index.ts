// #Number
const a: number = 3;
// #Array c1
const hobbies: string[] = ['sport', 'cooking'];
// generic array c2
const hobbies2: Array<string> = ['sport', 'cooking'];

// # tuple - push + post
const tuple = [2, 'abd'];

// #Any

// Enum

enum Role { ADMIN, READ_ONLY, AUTHOR };
/* 
	{
		'0': 'ADMIN',
		'1': 'READ_ONLY',
		'2': 'AUTHOR',
		ADMIN: 0,
		READ_ONLY: 1,
		AUTHOR: 2
	}
*/


// null and undefined


let uk: unknown;

let st: string;

uk = 3;
uk = true;
st = <string>uk;

console.log(st, '<----');