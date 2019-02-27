describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "fgh%FGH678" para "abc ABC123" con offset 100', () => {
      assert.equal(cipher.encode(100, 'abc ABC123'), 'fgh%FGH678');
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "abc ABC123" para "fgh%FGH678" con offset 100', () => {
      assert.equal(cipher.decode(100, 'fgh%FGH678'), 'abc ABC123');
    });
  });

});
