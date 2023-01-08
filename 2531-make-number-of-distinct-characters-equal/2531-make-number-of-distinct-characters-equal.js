/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function(word1, word2) {
    const m1 = new Map(), m2 = new Map();
    for(const char of word1){
        m1.set(char, m1.has(char)?m1.get(char) + 1 : 1)
    }
    for(const char of word2){
        m2.set(char, m2.has(char)?m2.get(char) + 1 : 1)
    }
    const m1c = m1.size, m2c = m2.size
    let tempm1c = m1c, tempm2c = m2c;
    //console.log(m1, m2)
    for(const char1 of m1.keys()){
        for(const char2 of m2.keys()){  
            if(char1 == char2){
                if(m1c === m2c) return true;
                continue;
            }
            tempm1c = m1c;
            tempm2c = m2c;
            if(m1.get(char1)===1){
                tempm1c = tempm1c-1;
            }
            if(m2.get(char2)===1){
                tempm2c = tempm2c-1;
            }
            //console.log(char1, char2, tempm1c, tempm2c)
            
            if(!m1.has(char2)){
                tempm1c = tempm1c+1;
            }
            
            if(!m2.has(char1)){
                tempm2c = tempm2c+1;
            }
         
            //console.log(char1, char2, tempm1c, tempm2c)
            
            if(tempm1c === tempm2c) return true;

            
            
        }
    }
    return false
};