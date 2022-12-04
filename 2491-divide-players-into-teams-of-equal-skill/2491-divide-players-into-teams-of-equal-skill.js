/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    skill.sort((a,b)=>a-b);
    const n = skill.length;
    const tSkill = skill[0]+skill[n-1];
    let ans = skill[0]*skill[n-1]
    for(let i = 1 ; i < n/2 ; i++){
        if((skill[i]+skill[n-i-1]) !== tSkill) return -1;
        ans += (skill[i]*skill[n-i-1])
    }
    return ans;
};