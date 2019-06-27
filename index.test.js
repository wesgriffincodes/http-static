const server = require('./index');


describe('app static server' () => {
    it('get file path from url pathname' () => {
        const filePath = getFilePath('');
        expect(filePath).toEqual('');
    })
})