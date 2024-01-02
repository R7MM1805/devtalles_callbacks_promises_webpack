import { bucleHeros, getHeroAwait, getHeroes, getHeroesAsync, heroIfAwait } from "./js/await";

console.time('GetHeroesAsync');
getHeroesAsync().then(heroe => {
    console.table(heroe);
    console.timeEnd('GetHeroesAsync');
});

console.time('GetHeroes');
getHeroes().then(heroe => {
    console.table(heroe);
    console.timeEnd('GetHeroes');
});

console.time('GetHeroeAwait');
getHeroAwait('capi').then(heroe => {
    console.table(heroe);
    console.timeEnd('GetHeroeAwait');
}).catch(console.warn);

bucleHeros();
heroIfAwait('iron');