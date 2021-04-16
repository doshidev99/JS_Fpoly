import { UserController } from './controllers/UserController';
const appEl: HTMLElement = document.querySelector('#app') as HTMLElement;
console.log(appEl ,'user-app');

if (appEl) {
	let usercontroller: UserController = new UserController(appEl);
}
