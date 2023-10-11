/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    const flower_count = new Map();

    for (const [start, end] of flowers) {
        flower_count.set(start, (flower_count.get(start) || 0) + 1);
        flower_count.set(end + 1, (flower_count.get(end + 1) || 0) - 1);
    }

    const days = Array.from(flower_count.keys()).sort((a, b) => a - b);

    let total_flowers = 0;
    for (const day of days) {
        total_flowers += flower_count.get(day) || 0; // Use 0 if flower count is undefined
        flower_count.set(day, total_flowers);
    }

    const answer = [];
    for (const person_time of people) {
        const index = days.findIndex(day => day > person_time);

        if (index === -1) {
            answer.push(0);
        } else {
            answer.push(flower_count.get(days[index - 1]) || 0); // Use 0 if flower count is undefined
        }
    }

    return answer;  
};