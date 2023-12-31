import { searchHero, searchHeroAsync } from "./promises";

const heroesIDs = ['capi', 'iron', 'spider'];

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

export {
    getHeroesAsync,
    getHeroes
}