/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const out = [];
    for(let i = 0 ; i < img.length ; i++){
        out[i] = [];
        for(let j = 0 ; j < img[0].length ; j++){
            let sum = img[i][j], count = 1;
            if(i-1 >= 0){
                sum += img[i-1][j];
                count++;
            }
            if(j-1 >= 0){
                sum += img[i][j-1];
                count++;
            }
            if(i-1 >= 0 && j-1 >= 0){
                sum += img[i-1][j-1];
                count++;
            }
            
            if(i+1 < img.length){
                sum += img[i+1][j];
                count++;
            }
            if(j+1 < img[0].length){
                sum += img[i][j+1];
                count++;
            }
            if(i+1 < img.length && j+1 < img[0].length){
                sum += img[i+1][j+1];
                count++;
            }
            if(i+1 < img.length && j-1 >= 0){
                sum += img[i+1][j-1];
                count++;
            }
            if(i-1 >= 0 && j+1 < img[0].length){
                sum += img[i-1][j+1];
                count++;
            }
            out[i][j] = Math.floor(sum/count);
        }
    }
    return out;
};