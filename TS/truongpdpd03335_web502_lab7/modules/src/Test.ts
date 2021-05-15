import validate from './StaticZipCodeValidator'

let strings = ['hello', '123', '101']

strings.forEach(s => {
	// eslint-disable-next-line no-console
	console.log(`${s} ${validate(s) ? 'matched' : 'does not match'}`, '<----');
})