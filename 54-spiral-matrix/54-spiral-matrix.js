/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const ans = [];
    const m = matrix.length;
    const n = matrix[0].length;
    const total = m*n;
    let order = 'right';
    let i = 0, j = 0;
    while(ans.length < total){
        ans.push(matrix[i][j])
        matrix[i][j] = 101;
        let ti = i, tj = j;
        switch(order)
        {
            case "right":{
                tj++; break;
            }
            case "bottom":{
                ti++; break;
            }
            case "left":{
                tj--; break;
            }
            case "top":{
                ti--; break;
            }
        }
        if(ti<0 || tj<0 || ti>=m || tj>=n || matrix[ti][tj] === 101){
            switch(order)
            {
                case "right":{
                    order = "bottom";
                    i++; break;
                }
                case "bottom":{
                    order = "left";
                    j--; break;
                }
                case "left":{
                    order = "top";
                    i--; break;
                }
                case "top":{
                    order = "right";
                    j++; break;
                }
            }
        }else{
            i = ti; j = tj;
        }
    }
    return ans;
};