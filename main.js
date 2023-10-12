import {normalizeURL, getURLsFromHTML} from './crawl.js'

const urlTest = normalizeURL('https://binshadcs.com/login');
console.log(urlTest);
const inputHtml = `
     <html>
     <body>
        <a href="https://sample.com"> Click here </a>
        <h2> Heading 2 here </h2>
        <a href="https://bcs.com"> Bcs </a>
    </body>
    </html>
`
const urlFromHtml = getURLsFromHTML(inputHtml)

console.log(urlFromHtml);
console.log('Hello World!');