import { heroes } from "./heroes"

const searchHero = (id) => {
    const hero = heroes[id];
    return new Promise((resolve, reject) => {
        hero ? setTimeout(() => resolve(hero), 1000) : reject(`The hero with ID ${id} is not found`);
    });
}

const promiseSlow = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa lenta'), 2000);
});
const promiseMedium = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa media'), 1500);
});
const promiseFast = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa rápida'), 1000);
});

const searchHeroAsync = async (id) => {
    const hero = heroes[id];
    if(hero){
        return hero;
    }else{
        throw Error(`The hero with ID ${id} is not found. Async`);
    }
}

export{
    searchHero,
    promiseSlow,
    promiseMedium,
    promiseFast,
    searchHeroAsync
}