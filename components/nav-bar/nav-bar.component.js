/* usp-card */
customElements.define('nav-bar',
    class foo extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById('nav-bar');
            let templateContent = template.content;
            const shadowRoot = this.attachShadow({mode: 'open'})
                                    .appendChild(templateContent.cloneNode(true));
        }

        connectedCallback() {
            // Close when click close icon
            let btn = this.shadowRoot.querySelector('.button--close');
            btn.addEventListener('click', function() {
                //Close it by hiding it
                btn.parentElement.parentElement.style.display = 'none';
            });
        }
});
