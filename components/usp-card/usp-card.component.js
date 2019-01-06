/* usp-card */
customElements.define('usp-card',
    class foo extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById('usp-card');
            let templateContent = template.content;
            const shadowRoot = this.attachShadow({mode: 'open'})
                                    .appendChild(templateContent.cloneNode(true));
        }
});
