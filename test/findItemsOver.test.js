describe('findItemsOver' , function(){
    it(' which person is older than 25' , function(){
        assert.deepEqual(findItemsOver([
            {name : 'John', qty : 10},
            {name : 'Peter', qty : 37}],25), [ { name: 'Peter', qty: 37 } ])
    });
    it('which person is older than 40' , function(){
        assert.deepEqual(findItemsOver([
            {name : 'May', qty : 10},
            {name : 'James', qty : 37}],25), [ { name: 'Jemes', qty: 37 } ])
    });
});