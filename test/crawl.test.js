import { normalizeURL , getURLsFromHTML} from '../src/crawl.js';
// import {test, expect} from '@jest/global';

test('normalizeURL strip protocol', () => {
    const input = 'https://binshadcs.com/path'
    const actual = normalizeURL(input)
    const expected = 'binshadcs.com/path'
    expect(actual).toEqual(expected) // toBe() or toEqual()
 })

 test('normalizeURL strip trailing slash', () => {
    const input = 'https://api.binshadcs.com/path/'
    const actual = normalizeURL(input)
    const expected = 'api.binshadcs.com/path'
    expect(actual).toEqual(expected) 
 })

 test('normalizeURL capitals', () => {
    const input = 'https://Binshadcs.com/path/'
    const actual = normalizeURL(input)
    const expected = 'binshadcs.com/path'
    expect(actual).toEqual(expected) 
 })

 test('normalizeURL strip http', () => {
    const input = 'http://blog.binshadcs.com/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.binshadcs.com/path'
    expect(actual).toEqual(expected) 
 })

 test('getURLsFromHTML absolute urls', () => {
    const inputHTMLBody = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Sample HTML with Anchor Tag</title>
    </head>
    <body>
        <p>Welcome to my website. Here's a link to an example page:</p>
        <a href="https://www.example.com">Visit Example.com</a>
    </body>
    </html>
    `
    const inputBaseURL = 'https://www.example.com'
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://www.example.com/"]
    expect(actual).toEqual(expected) 
 })


 test('getURLsFromHTML relative urls', () => {
    const inputHTMLBody = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Sample HTML with Anchor Tag</title>
    </head>
    <body>
        <p>Welcome to my website. Here's a link to an example page:</p>
        <a href="/path/">Visit Example.com</a>
    </body>
    </html>
    `
    const inputBaseURL = 'https://www.example.com'
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://www.example.com/path/"]
    expect(actual).toEqual(expected) 
 })


 test('getURLsFromHTML absolute and relative urls', () => {
    const inputHTMLBody = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Sample HTML with Anchor Tag</title>
    </head>
    <body>
        <p>Welcome to my website. Here's a link to an example page:</p>
        <a href="https://www.example.com/path1/">Visit Example.com blog path 1 </a>
        <a href="/path2/">Visit Example.com blog path 2</a>
    </body>
    </html>
    `
    const inputBaseURL = 'https://www.example.com'
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://www.example.com/path1/","https://www.example.com/path2/"]
    expect(actual).toEqual(expected) 
 })

 test('getURLsFromHTML invalid url', () => {
    const inputHTMLBody = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Sample HTML with Anchor Tag</title>
    </head>
    <body>
        <p>Welcome to my website. Here's a link to an example page:</p>
        <a href="invalid">Visit Example.com</a>
    </body>
    </html>
    `
    const inputBaseURL = 'https://www.example.com'
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected) 
 })