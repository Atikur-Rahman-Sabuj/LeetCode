/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const n = letters.length;
    if(target < letters[0]) return letters[0];
    if(target >= letters[n-1]) return letters[0];
    let low = 0, high = n-1, mid;
    while(low<=high){
        mid = Math.floor((low+high) / 2);
        //console.log(mid)
        if(target < letters[mid] && target >= letters[mid-1]){
            return letters [mid];
        }
        if(target>=letters[mid]){
            low = mid+1;
        }else{
            high = mid;
        }
        console.log(low, high)
    }
};