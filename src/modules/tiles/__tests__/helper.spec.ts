import helper, { TilesHelper } from '../helper';

describe('Helper', () => {
  const colors = ['#000000', '#335600', '#567900'];
  describe(TilesHelper.prototype.setRandomColor, () => {
    it('set rendom colors', () => {
      // should be defined
      expect(helper.setRandomColor()).toBeDefined();
      // should return string
      expect(typeof helper.setRandomColor()).toBe('string');
    });
  });
  describe(TilesHelper.prototype.shuffle, () => {
    it('should mix colors', () => {
      // should return array of colors
      expect(typeof helper.shuffle(colors)).toBe('object');
    });
  });
  describe(TilesHelper.prototype.generateMatrix, () => {
    it('should generate nxn board', () => {
      const generate = helper.generateMatrix(6);
      expect(typeof generate).toBe('object');
      expect(generate).toBeDefined();
    });
  });
});
