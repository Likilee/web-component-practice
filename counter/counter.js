class CustomCounter extends HTMLElement {
	constructor() {
		self = super();

		const counter = document.createElement('div');
	}
}

customElements.define('custom-counter', CustomCounter);