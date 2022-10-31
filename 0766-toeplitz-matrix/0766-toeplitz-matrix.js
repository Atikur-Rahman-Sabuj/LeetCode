/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    const r = matrix.length, c = matrix[0].length
    
    for(let i = 0 ; i < r ; i++){
        if(!find(i, 0)) return false;
    }
    
    for(let i = 0 ; i < c ; i++){
        if(!find(0, i)) return false;
    }
    
    return true;
    
    function find(i, j){
        let f = matrix[i][j];
        i++;
        j++;
        while(i < r && j < c){
            if(f !== matrix[i][j]) return false;
            i++;
            j++;
        }
        return true;
    }
};

 