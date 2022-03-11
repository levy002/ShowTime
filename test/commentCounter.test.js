import totalComment from "../src/modules/commentCounter";

describe('totalComment', () => {
    test('result should be equal to 2', () => {
      const list = [{ name: 'Thermiee' }, { name: 'Jolus' }];
      const result = totalComment(list);
  
      expect(result).toBe(2);
    });
  
    test('result should be equal to 0', () => {
      const list = [];
      const result = totalComment(list);
  
      expect(result).toBe(0);
    });
  });