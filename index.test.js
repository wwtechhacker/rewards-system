const { getRewards } = require('./index');

describe('Rewards calculation', () => {
	it('should return correct value', () => {
		expect(getRewards(3069)).toBe(5988);
		expect(getRewards(0)).toBe(0);
		expect(getRewards(120)).toBe(90);
		expect(getRewards(50)).toBe(50);
		expect(getRewards(100)).toBe(50);
	});
});
