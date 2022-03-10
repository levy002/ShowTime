import showNumber from '../src/modules/showCounter.js';

describe('showCounter', () => {
  test('result should be equal to 5', () => {
    const list = [{ name: 'levy' }, { name: 'gg' }, { name: 'oo' }, { name: 'tt' }, { name: 'ww' }];
    const result = showNumber(list);

    expect(result).toBe(5);
  });

  test('result should be equal to 0', () => {
    const list = [];
    const result = showNumber(list);

    expect(result).toBe(0);
  });
});