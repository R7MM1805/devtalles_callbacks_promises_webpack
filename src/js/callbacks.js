import { heroes } from "./heroes";

export const searchHero = (id, callback) => {
    const hero = heroes[id];
    hero ? callback(null, hero) : callback(`The hero with ID ${id} is not found`);
}