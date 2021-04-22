import { GameController } from './controllers/GameController';
import { GameItem } from './models/GameItem';
const rootEl: HTMLImageElement | null = document.querySelector('#app');


let gameApp: GameController | null = null;

const url = 'https://pokeapi.co/api/v2/pokemon/';
const AMOUNT_POKEMON = 5;
const targetResult = (async (url: string, amount: number) => {
	for (let i = 1; i < amount + 1; i++) {
		const res = await fetch(url + i);
		const data = await res.json();
		const pokemon: { id: number, image: string } = {
			id: i,
			// name: data.species.name,
			image: data.sprites.front_default,
			// type: data.types[0].type.name
		};

		// eslint-disable-next-line no-console
		// console.log(pokemon.image, '<----');
		// const listPoke: [] = []
		// if (rootEl) {

		// 	gameApp = new GameController([...listPoke, new GameItem(pokemon.id, '', pokemon.image)], rootEl);
		// 	gameApp.renderGameBoard();
		// }
	}
})(url, AMOUNT_POKEMON);

// const loadPoke = pokes.reduce((t, p): any => {
// 	[...t, new GameItem(p.id, '', p.image)]
// }, [])


if (rootEl) {

	gameApp = new GameController([
		new GameItem(1, '', 'pk1.png'),
		new GameItem(2, '', 'pk2.png'),
		new GameItem(3, '', 'pk3.png'),
	], rootEl);
	
	gameApp.renderGameBoard();
	// gameApp.renderResetBtn(rootEl);
}



