function printReport(pages){
    console.log("====================REPORT=================");
    const sortedPages = sortPages(pages)
    for(const sortedPage of sortedPages){
        const url = sortedPage[0];
        const hits = sortedPage[1];
        console.log(`Found ${hits} links to page: ${url}`);
    }
    console.log("====================END=================");
}

function sortPages(pages){
    const pagesArr = Object.entries(pages);
    pagesArr.sort((a, b) => {
        let aHit = a[1];
        let bHit = b[1];
        return b[1] - a[1];
    })
    return pagesArr;
}


export {sortPages, printReport};