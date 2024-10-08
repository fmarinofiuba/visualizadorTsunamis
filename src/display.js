/*

Esta clase crea un objeto en el footer de la pagina que contiene html
*/

export class Display {
	div;
	constructor() {
		// creo un div y lo agrego al documento
		this.div = document.createElement('div');
		this.div.id = 'display';
		this.div.innerHTML = `
      <div id="footer">
        <p></p>
      </div>
      `;
		document.body.appendChild(this.div);
	}

	setText(text) {
		this.div.querySelector('p').innerHTML = text; // seteo el texto del div
	}
}
