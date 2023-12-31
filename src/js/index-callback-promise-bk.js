import { searchHero as searchHeroCallback } from './js/callbacks';
import { searchHero } from './js/promises';

import './style.css';

const heroID = 'spider';
const heroID1 = 'capi';
const heroID2 = 'iron';

console.warn('Uso de callbacks')
searchHeroCallback(heroID, (error, success) => {
    error ? console.error(error) : console.log(success);
});

//Callback hell -- Se debe evitar
searchHeroCallback(heroID1, (error, success) => {
    if(error) { return console.error(error); }
    searchHeroCallback(heroID2, (error2, success2) => {
        if(error2) { return console.error(error2); }
        console.log(`Enviando a la misión a ${success.name} y ${success2.name}`);
    });
});

console.warn('Uso de promesas');

//Promesas -- se recomienda usar promesas
searchHero(heroID).then(hero => {
    console.log(`Enviando a la misión a ${hero.nickname}`);
});

//Promise all con desestructuracion de un arreglo ([hero1, hero2, ..., n])
Promise.all([searchHero(heroID1), searchHero(heroID2), searchHero(heroID)]).then(([hero1, hero2, hero3]) => {
    console.log(`Enviando a la misión a ${hero1.name}, ${hero2.name} y ${hero3.name}`);
}).catch(error => {
    alert(error);
}).finally(() =>{
    console.log('Se termino el promise.all');
});

console.log('Fin del programa');
