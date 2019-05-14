describe('findItemsOver20' , function(){
    it('return all the products that have a quantity higher than 20' , function(){
        assert.deepEqual(findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37}]), [ { name: 'pears', qty: 37 } ])
    });
    it('return all the products that have a quantity less than 40' , function(){
        assert.deepEqual(findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37}]), [ { name: 'pears', qty: 37 } ])
    });

});