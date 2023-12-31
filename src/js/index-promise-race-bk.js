import { promiseSlow, promiseMedium, promiseFast } from "./js/promises";

console.warn('Promesas de lenta a rápida');
promiseSlow.then(console.log).catch(console.warn);
promiseMedium.then(console.log).catch(console.warn);
promiseFast.then(console.log).catch(console.warn);

console.warn('Promesa race');
Promise.race([promiseSlow, promiseMedium, promiseFast]).then(console.log).catch(console.error);