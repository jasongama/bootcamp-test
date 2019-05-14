describe(' countRegNumber' , function(){
    it(' returns the number of registration numbers in the string' , function(){
        assert.equal( countRegNumber('CA 182736,CY 523519,CJ 812328') , 3)
    });
    it(' returns the number of registration numbers in the string (2)' , function(){
        assert.equal( countRegNumber('CA 182736,CY 523519') , 2)
    });
    it(' returns the number of registration numbers in the string' , function(){
        assert.equal( countRegNumber('CA 42665, AA 12 RT GP') , 2)
    });
});