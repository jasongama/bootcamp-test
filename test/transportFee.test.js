describe('transportFee' , function(){
    it(' returns the right price based on the shift you are working' , function(){
        assert.equal(transportFee('monday'), 'R20')
    });
    it(' returns the right price based on the shift you are working' , function(){
        assert.equal(transportFee('afternoon'), "R10")
    });
    it(' returns the right price based on the shift you are working' , function(){
        assert.equal(transportFee('nightshift'), "free")
    });
});