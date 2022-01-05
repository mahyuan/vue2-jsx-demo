const path = require('path')
const fs = require('fs');

function getDataFromHtml() {
    let uls = document.querySelectorAll('ul')
    let result = Array.from(uls).map((ul) => {
        let links = ul.querySelectorAll('li a');
        let paris = Array.from(links).map((link) => {
            const text = link.innerText;
            let attrs = Object.values(link.attributes).reduce((prev, cur) => {
                prev[cur.name] = cur.value
                return prev
            }, {})

            return {
                text,
                attrs
            }

        })
        return {
            links: paris
        }
    })
    return result;
}

function start() {
    const result = getDataFromHtml()
    fs.writeFileSync(path.resolve(__dirname, 'data.json'), result)
}
start()