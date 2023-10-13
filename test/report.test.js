import { sortPages } from '../src/report.js';


test('sortPages 2 pages', () => {
    const input = {
        'google.com': 1,
        'google.com/preferences' : 4,
    }
    const actual = sortPages(input)
    const expected = [
        ['google.com/preferences' , 4],
        ['google.com', 1]
    ]
    expect(actual).toEqual(expected) // toBe() or toEqual()
 })

 test('sortPages 5 pages', () => {
    const input = {
        'google.com': 1,
        'google.com/preferences' : 5,
        'google.com/preferences1' : 3,
        'google.com/preferences2' : 2,
        'google.com/preferences3' : 7
    }
    const actual = sortPages(input)
    const expected = [
        ['google.com/preferences3' , 7],
        ['google.com/preferences' , 5],
        ['google.com/preferences1' , 3],
        ['google.com/preferences2' , 2],
        ['google.com', 1]
    ]
    expect(actual).toEqual(expected) // toBe() or toEqual()
 })