describe('scrabbleScore', function() {
    it('a equals 1', function() {
        expect(scrabbleScore('a')).to.equal(1);
    });

    it('j equals 8', function() {
        expect(scrabbleScore('j')).to.equal(8);
    });

    it('ji equals 9', function() {
        expect(scrabbleScore('ji')).to.equal(9);
    });

    it('OHGODHELP equals 19', function() {
        expect(scrabbleScore('OHGODHELP')).to.equal(19);
    });

    it('and if', function(){
        expect(scrabbleScore('and if')).to.equal(-1);
    });

});
