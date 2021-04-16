import autobind from 'autobind-decorator';
import { validate } from 'class-validator';
import { User } from './../models/User';
export class UserController {
	constructor(public element: HTMLElement) {

		const btn = element.querySelector('#play');
		btn?.addEventListener('click', this.processPlayBtnClick);
	}

	@autobind
	// log status class when process...

	processPlayBtnClick(e: Event) {
		e.preventDefault();
		const that = this.element;

		const form = that.querySelector('form') as HTMLFormElement;
		const usernameElm = that.querySelector('#username') as HTMLInputElement;
		const helpId = that.querySelector('#help-username');

		if (usernameElm) {
			let user: User = new User(usernameElm.value);

			validate(user).then(errs => {
				if (errs.length > 0) {
					if (helpId) {
						helpId.className = "form-text text-danger visible"
					}
				} else {
					form.submit();
				}
			})
		}
	}

}