import { normalizeURL } from './crawl.js';
// import {test, expect} from '@jest/global';

test('normalizeURL strip protocol', () => {
    const input = 'https://binshadcs.com/path'
    const actual = normalizeURL(input)
    const expected = 'binshadcs.com/path'
    expect(actual).toEqual(expected) // toBe() or toEqual()
 })

 test('normalizeURL strip tariling slash', () => {
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

