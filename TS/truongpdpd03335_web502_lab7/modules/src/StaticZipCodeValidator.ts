const reg = /^[0-9]+$/;

export default function (s: string) {
	return s.length === 5 && reg.test(s)
}
