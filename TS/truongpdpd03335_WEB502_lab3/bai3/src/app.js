var pokemons = [];
var getData = function (url, amount) {
    var _loop_1 = function (i) {
        fetch(url + i).then(function (res) { return res.json().then(function (data) {
            var pokemon = {
                id: i,
                name: data.species.name,
                image: data.sprites.front_default,
                type: data.types[0].type.name
            };
            pokemons.push(pokemon);
        }); });
    };
    for (var i = 1; i < amount + 1; i++) {
        _loop_1(i);
    }
};
var url = 'https://pokeapi.co/api/v2/pokemon/';
var AMOUNT_POKEMON = 10;
getData(url, AMOUNT_POKEMON);
var render = function (data) {
    var table = document.querySelector('#app');
    console.log(data);
    var html = data[0].map(function (i) {
        return ("<div class=\"col-2\">\n            <img src=\"" + i.image + "\">\n        </div>");
    });
    console.log(html);
};
render(pokemons);
