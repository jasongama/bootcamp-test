describe('greet' , function(){
    it('returns a greeting message' , function(){
        assert.equal(greet('jason'), "Hello, jason");
    });
    it('returns a greeting message(surname)' , function(){
        assert.equal(greet('Tarantino'), "Hello, Tarantino");
    });
    it('returns a greeting message(Numbers)' , function(){
        assert.equal(greet('1234'), "Hello, 1234");
    });
});