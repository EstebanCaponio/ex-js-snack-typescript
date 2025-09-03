// snack 1 + bonus
let date: unknown;

if (typeof date === 'string') {
  console.log(date.toUpperCase());
} else if (typeof date === 'number') {
  console.log(date * 2);
} else if (typeof date === 'boolean') {
  console.log(date ? 'si' : 'no');
} else if (date === null) {
  console.log('Il dato è vuoto');
} else if (Array.isArray(date)) {
  console.log(date.length);
} else if (date instanceof Promise) {
  date.then((msg) => console.log(msg))
} else {
  console.log('Tipo non supportato');
}