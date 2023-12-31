import { getHeroes, getHeroesAsync } from "./js/await";

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