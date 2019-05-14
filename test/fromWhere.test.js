describe('fromWhere' , function(){
    it('returns the town the car is from' , function(){
        assert.equal(fromWhere('CY'), 'Bellville')
    });
    it('returns the town the car is from' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl')
    });
    it('returns the town the car is from' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town')
    });
});