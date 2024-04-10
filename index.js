const Store = require('electron-store');

const store1 = new Store();
const store2 = new Store();

store1.set('unicorn', '🦄');
store2.set('unicorn', '🦄');

console.log(store1.get('unicorn'));
console.log(store2.get('unicorn'));

store1.clear();

console.log(store1.get('unicorn'));
console.log(store2.get('unicorn'));
