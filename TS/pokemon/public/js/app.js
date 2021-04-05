var pokemons = [];
const url = 'https://pokeapi.co/api/v2/pokemon/';
const AMOUNT_POKEMON = 15;
const getData = async (url, amount) => {
    for (let i = 1; i < amount + 1; i++) {
        const res = await fetch(url + i);
        const data = await res.json();
        const pokemon = {
            id: i,
            name: data.species.name,
            image: data.sprites.front_default,
            type: data.types[0].type.name
        };
        pokemons.push(pokemon);
    }
    shuffle(pokemons);
    render(pokemons);
};
getData(url, AMOUNT_POKEMON);
const render = (data) => {
    const table = document.querySelector('#app');
    let html = data.map((i) => {
        return `<div class="pokemon col-2"><img src="${i.image}"><div class="poke-id">#$${i.id}</div></div>`;
    });
    table.innerHTML = html.join('');
};
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // eslint-disable-next-line no-console
    console.log(temporaryValue, '<----');
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
