describe('mostProfitableDepartment' , function(){
    it('return the most profitable Department:hardware' , function(){
        assert.deepEqual(mostProfitableDepartment([
            {department:"hardware",sales:4500,day:"Monday"},
            {department:"outdoor",sales:1500,day:"Monday"}]), "hardware")
    });
    it('return the most profitable Department:carpentry' , function(){
        assert.deepEqual(mostProfitableDepartment([
            {department:"carpentry",sales:4500,day:"Tuesday"},
            {department:"electronics",sales:1500,day:"Tuesday"}]), "carpentry")
    });

});