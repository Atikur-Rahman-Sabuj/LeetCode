/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    let fc = 0;
    for(const num of data){
        const bin = num.toString(2).padStart(8, '0');
        //console.log(bin)
        if(fc === 0){
            let i = 0;
            while(bin[i] === '1'){ i++ }
            if(i >= 5 || i === 1) return false;
            if(i !== 0) fc = i - 1;
        }else{
            if(bin[0] === '1' && bin[1] === '0'){
                fc--;
            }else{
                return false;
            }
        }
    }
    return fc === 0;
    
};