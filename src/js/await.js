import { searchHero, searchHeroAsync } from "./promises";

const heroesIDs = ['capi', 'iron', 'spider'];
const promisesHeros = heroesIDs.map(searchHero);

const getHeroesAsync = async () => {
    const heroes = [];
    let hero;
    for (const heroeID of heroesIDs) {
        hero = await searchHeroAsync(heroeID);
        heroes.push(hero);
    }
    return heroes;
}

const getHeroes = async () => {
    return await Promise.all(heroesIDs.map(searchHero));
}

const getHeroAwait = async (heroID) => {
    try {
        const hero = await searchHero(heroID);
        return hero;    
    } catch (error) {
        console.warn('CATCH');
        throw error;
    }
}


const bucleHeros = async () => {
    console.time('BucleHeros');
    for await (const heroe of promisesHeros){
        console.log(heroe);
    }
    console.timeEnd('BucleHeros');
}

const heroIfAwait = async (heroID) => {
    if((await searchHeroAsync(heroID)).nickname === 'Ironman'){
        console.log('Dio la vida por los vengadores');
    }else{
        console.log('Nahh');
    }
}

export {
    getHeroesAsync,
    getHeroes,
    getHeroAwait,
    bucleHeros,
    heroIfAwait
}
