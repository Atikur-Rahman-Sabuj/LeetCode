/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b) => b-a)
    let ans = 0, i = 0, j = people.length - 1
    while(i <= j){
        if(people[i]+people[j] <= limit){
            i++ 
            j--
        }else{
            i++ 
        }
        ans++
    }
    return ans
};