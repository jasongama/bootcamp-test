describe('findItemsOver' , function(){
    it(' which person is older than 20' , function(){
        assert.deepEqual(findItemsOver([
            {name : 'John', age : 10},
            {name : 'Peter', age : 37}],20), [ { name: 'Peter', age: 37 } ])
    });
    it('which person is older than 25' , function(){
        assert.deepEqual(findItemsOver([
            {name : 'May', age : 10},
            {name : 'James', age : 37}],25), [ { name: 'James', age: 37 } ])
    });
});