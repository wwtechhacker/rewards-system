const records = require('./records-data.json');

function getRewards(purchase) {
	return purchase > 100 ? (purchase - 100) * 2 + 50 : purchase >= 50 ? 50 : 0;
}

function solution(records) {
	const monthlyRewards = {};
	const rewardsList = records.map((transaction) => {
		const rewards = getRewards(transaction.purchase);
		const formattedDate = `${new Date(transaction.date).getFullYear()}/${
			new Date(transaction.date).getMonth() + 1
		}`;
		monthlyRewards[formattedDate] = monthlyRewards[formattedDate]
			? monthlyRewards[formattedDate] + rewards
			: rewards;

		return {
			...transaction,
			rewards
		};
	});

	console.table(monthlyRewards);
	const total = Object.values(monthlyRewards).reduce((a, b) => a + b, 0);
	console.log('Total', total);
	return total;
}

solution(records);

module.exports = {
	getRewards
};
