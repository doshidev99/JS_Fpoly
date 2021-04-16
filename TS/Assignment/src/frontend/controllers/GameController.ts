import autobind from "autobind-decorator";
import * as _ from "lodash";
import { GameItem, GameItemStatus } from "../models/GameItem";

export class GameController {
	private items: GameItem[] = [];

	constructor(items: GameItem[], public element: HTMLElement) {
		this.initGame(items);
	}

	initGame(initialData: GameItem[]): void {
		for (const item of initialData) {
			this.items.push(item)
			this.items.push(new GameItem(item.id, item.divId, item.image));
			// duplicate item
		}

		let id: number = 1;
		this.items.forEach(v => {
			v.status = GameItemStatus.Close;
			v.divId = 'd' + id,
				id++;
		})
	}

	reInitGame(): void {

	}

	// isWinnerGame(): boolean {

	// }

	renderHtml(rootEl: HTMLElement, item: GameItem) {

		const divItem: HTMLDivElement = document.createElement('div');
		divItem.className = 'col-2 poke-card mx-1 my-3';
		divItem.id = item.divId;
		divItem.addEventListener('click', this.processGameItemClicked);

		const imgItem: HTMLImageElement = document.createElement('img');
		imgItem.src = `images/${item.image}`;
		imgItem.className = 'w-100 h-100 img-poke visible';
		divItem.appendChild(imgItem);
		rootEl.appendChild(divItem);

	}

	renderResetBtn(rootEl: HTMLElement): void {

	}

	renderGameBoard(): void {

		this.shuffle();

		let boardDiv: HTMLElement = this.element.querySelector('#board') as HTMLElement;

		if (boardDiv) {
			this.items.forEach(it => {
				this.renderHtml(boardDiv, it)
			})
		}

	}

	// isMatched(id: number, imgEl: HTMLImageElement): boolean { }

	changeMatchedBackground(imgEl: HTMLElement | null, isMatched: boolean = true) { }

	@autobind
	processGameItemClicked(e: Event) {
		let el: HTMLElement | null = e.target as HTMLElement;

		if (el.tagName === 'img') {
			el = el.parentElement;
		}

		for (const item of this.items) {
			switch (true) {
				case item.divId === el?.id:
				case !item.isMatched:
				case item.status === GameItemStatus.Close:
					let imgEl = el?.querySelector('img');

					if (imgEl) {
						imgEl.className = "w-100 h-100 img-poke visible";
					}
					break;
				default: return;
			}
		}


	}

	processResetBtnClicked(e: Event) { }

	shuffle() {
		this.items = _.shuffle(this.items);
	}

}