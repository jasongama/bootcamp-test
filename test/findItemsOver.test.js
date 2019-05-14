describe('findItemsOver' , function(){
    it('return all the products that have a quantity higher than 25' , function(){
        assert.deepEqual(findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37}],25), [ { name: 'pears', qty: 37 } ])
    });
    it('return all the products that have a quantity higher than 40' , function(){
        assert.deepEqual(findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37}],25), [ { name: 'pears', qty: 37 } ])
    });
});