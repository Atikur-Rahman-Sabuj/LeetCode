/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    items1.sort((a,b)=>a[0]-b[0]);
    items2.sort((a,b)=>a[0]-b[0]);
    let i1 = 0, i2 = 0;
    const out = [];
    while(i1<items1.length && i2<items2.length){
        if(items1[i1][0] === items2[i2][0]){
            out.push([items1[i1][0], items1[i1][1] + items2[i2][1]]);
            i1++;
            i2++;
        }
        else if( items1[i1][0] < items2[i2][0] ){
            out.push(items1[i1]);
            i1++;
        }else{
            out.push(items2[i2]);
            i2++;
        }
    }
    while(i1 < items1.length){
        out.push(items1[i1]);
        i1++;
    }
    
    while(i2 < items2.length){
        out.push(items2[i2]);
        i2++;
    }
    
    return out;
    
};