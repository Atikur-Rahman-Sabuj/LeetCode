/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a, b) => a - b)
    let low = 0, high = tokens.length - 1, score = 0, result =0;
    while(low <= high){
        if(tokens[low] <= power){
            score++;
            power -= tokens[low];
            low++;
            result = Math.max(result, score);
        }else if(score > 0){
            score--;
            power += tokens[high];
            high--;
        }else{
            break;
        }
    }
    return result;
};