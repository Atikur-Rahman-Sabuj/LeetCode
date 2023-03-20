/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let isLastFlower = false, nn = 0
    for(let i = 0 ; i < flowerbed.length ; i++){
        let flower = flowerbed[i]
        if(flower){
            isLastFlower = true;
        }
        else if(!isLastFlower){
            if(!flowerbed[i+1]){
                nn++;
                isLastFlower = true;
            }
        }else{
            isLastFlower = false;
        }
    }

    return nn >= n
};