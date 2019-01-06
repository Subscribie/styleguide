async function fetchComponents(components) {
    /*
        Usage: 
        1. Include fetchComponents.js once in your html

        <script src="js/fetchComponents.js"></script> 

        2. Specify which web component(s) you want to load in an array

        3. Call fetchComponents(components)

        <script>
            components = ['my-custom-element', 'another-custom-element'];
            fetchComponents(components);
        </script>
    */
    for(var i = 0; i < components.length; i++)
    {
        await fetchComponent(components[i]);
    } 
}

function fetchComponent(componentName) {
    let componentDir = '/styleguide/components';
    template = componentDir + '/' + componentName + '/' + componentName + '.component.html'
    customElement = componentDir + '/' + componentName + '/' + componentName + '.component.js'

    if (!customElements.get(componentName))
    {
    return fetch(template)
        .then(res => res.text())
        .then(res => {
            console.log(res);
            document.body.insertAdjacentHTML('afterbegin', res)
            return res;
        })
        .then(res => fetch(customElement))
        .then(res => res.text())
        .then( res => {
            return eval(res);
        });
    }
}

//Quick and dirty viewport for static deveopment
var metaTag=document.createElement('meta');
metaTag.name = "viewport"
metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
document.getElementsByTagName('head')[0].appendChild(metaTag);
