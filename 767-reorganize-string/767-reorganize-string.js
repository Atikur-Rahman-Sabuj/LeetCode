/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const freq = new Array(26).fill(0);
    for(const char of s){
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    const pq = new MaxPriorityQueue({priority: a => a[0]});
    for(let i = 0 ; i < 26 ; i++){
        if(freq[i] > 0)
            pq.enqueue([freq[i], i]);
    }
    console.log(pq.front());
    if(pq.front().priority > Math.ceil(s.length/2)) return ""
    
    let ans = [];
    let temp = pq.dequeue().element;
    ans.push(String.fromCharCode(temp[1]+'a'.charCodeAt(0)));
    while(pq.front()){
        //console.log(pq.front());
        let t = pq.dequeue().element;
        ans.push(String.fromCharCode(t[1]+'a'.charCodeAt(0)));
        if(temp[0] > 1){
            pq.enqueue([temp[0]-1, temp[1]]);
        }  
        temp = t;
    }
    return ans.join("");
};

