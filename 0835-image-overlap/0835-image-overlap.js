/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    const img1Values = [];
	const img2Values = [];
	const n = img1.length;
	const overlapMap = new Map();

	for (let a = 0; a < n; a++) {
		for (let b = 0; b < n; b++) {
			img1[a][b] && img1Values.push({ row: a, col: b });
			img2[a][b] && img2Values.push({ row: a, col: b });
		}
	}

	img1Values.forEach(one => {
		img2Values.forEach(two => {
			const OffestKey = `${one.row - two.row}-${one.col - two.col}`;
			const overlap = overlapMap.get(OffestKey) ?? 0;
			overlapMap.set(OffestKey, overlap + 1);
		});
	});

	return Math.max(...overlapMap.values(), 0);
};