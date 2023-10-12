import {JSDOM} from 'jsdom'

function getURLsFromHTML(htmlBody){ // add baseURL as argument for if else statement 
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a');
    for(const linkElement of linkElements){
        if(linkElement.href.slice(0,1) === '/'){
            // relative url
        }else{
            // absolute urls 
        }
        urls.push(linkElement.href)
    }
    return urls;
}


function normalizeURL(urlString) {
    const urlObj = new URL(urlString);
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`;
    if(hostPath.length > 0 && hostPath.slice(-1) === '/'){
        return hostPath.slice(0,-1);
    }
    return hostPath;
}

export {
    normalizeURL,
    getURLsFromHTML
} ; // named export 


