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
		this.items.forEach(item => {
			item.status = GameItemStatus.Close;
			item.isMatched = false;
			item.imageEl = null;
		});
		this.shuffle();
	}

	isWinnerGame(): boolean {
		return this.items.filter(item => item.status === GameItemStatus.Open).length === this.items.length;
	}

	renderHtml(rootEl: HTMLElement, item: GameItem) {
		const divItem: HTMLDivElement = document.createElement('div');
		divItem.className = 'col-2 poke-card mx-1 my-3';
		divItem.id = item.divId;
		divItem.addEventListener('click', this.processGameItemClicked);

		const imgItem: HTMLImageElement = document.createElement('img');
		imgItem.src = `images/${item.image}`;
		imgItem.className = 'w-100 h-100 img-poke invisible';
		divItem.appendChild(imgItem);
		rootEl.appendChild(divItem);
	}

	renderResetBtn(rootEl: HTMLElement): void {
		let btnReset: HTMLButtonElement = rootEl.querySelector('button#reset') as HTMLButtonElement;
		let btnCancel: HTMLButtonElement = rootEl.querySelector('button#cancel') as HTMLButtonElement;
		// eslint-disable-next-line no-console
		// note ?????? why bind this and missing context
		if (btnReset) {
			btnReset.addEventListener('click', this.processResetBtnClicked.bind(this))
		}

		if (btnCancel) {
			btnCancel.addEventListener('click', this.processCancelBtnClicked.bind(this))
		}
	}

	renderGameBoard(): void {
		this.shuffle();
		let boardDiv: HTMLElement = this.element.querySelector('#board') as HTMLElement;

		if (boardDiv) {
			this.items.forEach(it => {
				this.renderHtml(boardDiv, it)
			})
		}

		this.renderResetBtn(this.element)

	}

	isMatched(id: number, imgEl: HTMLImageElement): boolean {

		let openItems: GameItem[] = this.items.filter(element => {
			if (element.status === GameItemStatus.Open && !element.isMatched) {
				return { ...element }
			}
		})

		if (openItems.length === 2) {
			const checkMatchedFilter = openItems.filter((e) => e.id === id);
			if (checkMatchedFilter.length < 2) {
				openItems.forEach(item => this.changeMatchedBackground(item.imageEl, false));
				setTimeout(() => {
					openItems.forEach(item => {
						if (item.imageEl) {
							item.status = GameItemStatus.Close;
							item.isMatched = false;
							item.imageEl.classList.add('invisible')
							item.imageEl.parentElement?.classList.remove("unmatched")
						}
					})
				}, 600)
			} else {
				openItems.forEach(item => {
					item.isMatched = true;
					this.changeMatchedBackground(item.imageEl);
					let flag = this.isWinnerGame();
					if (flag) {
						alert('You winner game congratulation 🚀🚀🚀🚀🚀🚀🚀! ')
					}
				})
				return true;
			}
		}
		return false;
	}

	changeMatchedBackground(imgEl: HTMLElement | null, isMatched: boolean = true) {

		if (imgEl?.parentElement) {
			if (!isMatched) {
				imgEl.parentElement.classList.add('unmatched');
			} else {
				imgEl.classList.add('invisible')
				imgEl.parentElement.classList.add('invisible');
			}
		}
	}

	@autobind
	processGameItemClicked(e: Event) {
		let el: HTMLElement | null = e.target as HTMLElement;

		if (el.tagName === 'img') {
			el = el.parentElement;
		}

		for (const item of this.items) {
			if (item.divId === el?.id && !item.isMatched && item.status === GameItemStatus.Close) {
				item.status = GameItemStatus.Open;
				let imgEl = el?.querySelector('img');
				if (imgEl !== null) {
					item.imageEl = imgEl;
					imgEl.className = "w-100 h-100 img-poke visible";
					this.isMatched(item.id, imgEl); //call compare poke
				}
			}
		}


	}

	shuffle() {
		this.items = _.shuffle(this.items);
	}

	processResetBtnClicked(): void {
		this.reInitGame();
		const boardElement: HTMLElement = document.querySelector('#board') as HTMLElement;
		boardElement.innerHTML = '';
		this.renderGameBoard();
	}

	processCancelBtnClicked(): void {
		window.location.href = "http://localhost:3001/login"
	}
}
