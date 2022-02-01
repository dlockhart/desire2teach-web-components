import {css, html, LitElement} from 'lit';

class ButtonSubtle extends LitElement {

	constructor() {
		super();
		this.disabled = false;
	}

	static get properties() {
		return {
			disabled: { type: Boolean, reflect: true },
			src: { type: String },
		}
	}

	static get styles() {
		return css`
			:host {
				display: inline-block;
			}
			button {
				align-items: center;
				background-color: transparent;
				border-color: transparent;
				border-radius: 6px;
				color: #006FBF;
				display: flex;
				font-family: inherit;
				outline: none;
				padding: 10px 12px;
				font-size: 14px;
			}
			button:hover:not([disabled]),
			button:focus:not([disabled]) {
				background-color: #e3e9f1;
			}
			button:focus-visible {
				box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #006fbf;
			}
			button[disabled] {
				cursor: default;
				opacity: 0.5;
			}
			img {
				margin-right: 5px;
			}
		`;
	}

	render() {
		return html`
			<button ?disabled="${this.disabled}">
				<img src="${this.src}" alt="">
				<slot></slot>
			</button>
		`;
	}

	// Invoked when a component is added to the document's DOM
	connectedCallback() {
		super.connectedCallback();
	}

	// Invoked when a component is removed from the document's DOM
	disconnectedCallback() {
		super.disconnectedCallback();
	}

	// Invoked when component attribute changes
	attributeChangedCallback(attrName, oldVal, newVal) {
		super.attributeChangedCallback(attrName, oldVal, newVal);
	}

}

customElements.define('button-subtle', ButtonSubtle);