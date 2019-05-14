describe('totalPhoneBill' , function(){
    it('totalPhoneBill should return R2.75' , function(){
        assert.equal(totalPhoneBill("call"), 'R2.75')
    });
    it('totalPhoneBill should return R0.65' , function(){
        assert.equal(totalPhoneBill("sms"), 'R0.65')
    });
    it('totalPhoneBill should return R0.00' , function(){
        assert.equal(totalPhoneBill("totalSms + totalCall"), 'R0.00')
    });
});