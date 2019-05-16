describe('findItemsOver' , function(){
    it(' which cars is over 20 years' , function(){
        assert.deepEqual(findItemsOver([
            {name : 'BMW', age : 10},
            {name : 'Mercedes', age : 37}],20), [ { name: 'Peter', age: 37 } ])
    });
    it('which cars is over 25 years' , function(){
        assert.deepEqual(findItemsOver([
            {name : 'BMW', age : 10},
            {name : 'Mercedes', age : 37}],25), [ { name: 'James', age: 37 } ])
    });
});