/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    let ans = 0;
    for(let i = 0; i<energy.length ; i++){
        if(initialEnergy <= energy[i]){
            ans += energy[i] - initialEnergy + 1;
            initialEnergy = energy[i] + 1;
        }
        if(initialExperience <= experience[i]){
            ans += experience[i] - initialExperience + 1;
            initialExperience = experience[i] + 1;
        }
        initialEnergy -= energy[i];
        initialExperience += experience[i];
    }
    return ans;
};