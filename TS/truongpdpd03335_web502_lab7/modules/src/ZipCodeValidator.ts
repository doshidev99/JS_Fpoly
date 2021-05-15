import { StringValidator } from './StringValidator'

const reg = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
	isAcceptable(s: string) {
		return s.length === 5 && reg.test(s)
	}
}

export { ZipCodeValidator as mainValidator }