describe('yearsAgo' , function(){
    it('return how many years ago that was' , function(){
        assert.equal(yearsAgo('1993'), 26)
    });
    it('return how many years ago that was' , function(){
        assert.equal(yearsAgo('1997'), 22)
    });
    it('return how many years ago that was' , function(){
        assert.equal(yearsAgo('2020'), -1)
    });
});