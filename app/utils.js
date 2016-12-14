export function randomId() {
	return Math.round(Math.random() * 0xffffffffffffffff).toString(36);
}
