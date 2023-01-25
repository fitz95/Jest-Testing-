const capitalize =  require('./capitalize')

describe('capitalize  function', () => { 

    test('the  first string should be capitalize', () => {
        expect(capitalize('bobson')).toBe('Bobson');
     })
 })