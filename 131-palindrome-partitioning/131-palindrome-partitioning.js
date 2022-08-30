/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let n = s.length;
    const ans = [];
    findPalindrome(1, [[s[0]]]);
    function findPalindrome(index, arr){
        if(index === n){
            if(isPalindrome(arr[arr.length - 1]))
            ans.push(arr.map(a=>a.join("")));
            return;
        }
        let li = arr.length - 1;
        arr[li].push(s[index]);
        findPalindrome(index+1, arr)
        arr[li].pop(); 
        if(isPalindrome(arr[li])){
            findPalindrome(index+1, [...arr, [s[index]]]);
        }
    }
    
    function isPalindrome(s){
        let high = s.length - 1;
        let low = 0;
        while(low <= high){
            if(s[low] !== s[high]) return false;
            low++;
            high--;
        }
        return true;
    }
    return ans;
};