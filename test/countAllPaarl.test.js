describe('countAllPaarl' , function(){
    it(' returns the number of registration numbers in the string for Paarl' , function(){
        assert.equal( countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'), 2)
    });
    it(' returns the number of registration numbers in the string for Paarl' , function(){
        assert.equal( countAllPaarl('CL 900, 678 543, CA 34567,  67890, CN 7864'), 0)
    });
    it(' returns the number of registration numbers in the string for Paarl' , function(){
        assert.equal( countAllPaarl('CL 900, " ", CA 34567,  " ", CN 7864'), 0)
    });
});