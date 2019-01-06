/* usp-grid */
customElements.define('usp-grid',
    class extends HTMLElement {
        constructor() {
            super();
            let templates = document.getElementById('usp-grid');
            let templateContents = templates.content;
            const shadowRoot = this.attachShadow({mode: 'open'})
                                .appendChild(templateContents.cloneNode(true));
        }
});
