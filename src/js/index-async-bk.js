import { searchHero, searchHeroAsync } from "./js/promises";

searchHero('capi').then(console.log).catch(console.warn);
searchHeroAsync('iron').then(console.log).catch(console.warn);

searchHero('capi2').then(console.log).catch(console.warn);
searchHeroAsync('iron2').then(console.log).catch(console.warn);
