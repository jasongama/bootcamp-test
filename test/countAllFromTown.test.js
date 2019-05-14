describe('countAllFromTown' , function(){
    it('return number registration numbers in the string that is for that town' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3)
    });
   
    it('return number registration numbers in the string that is for that town' , function(){
        assert.equal(countAllFromTown('L 124,CY 567,L 345, CJ 456,L 341','L'), 0)
    });

    it('return number registration numbers in the string that is for that town' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,L 345, CJ 456,L 341','L'), 1)
    });
});