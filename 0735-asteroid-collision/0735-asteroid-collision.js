/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const out = [];
    for(const ast of asteroids){
        if(out.length === 0){
            out.push(ast);
        }else if(isSameDirection(out[out.length - 1], ast)){
            out.push(ast);
        }else if(!isSameDirection(out[out.length - 1], ast) && ast > 0){
            out.push(ast);
        }else{
            let temp = ast;
            while(out.length > 0 && !isSameDirection(out[out.length - 1], temp) && temp < 0){
                let tout = out.pop();
                if(Math.abs(temp) === Math.abs(tout)){
                    temp = 0;
                    break;
                }else{
                    temp = Math.abs(temp) > Math.abs(tout) ? temp : tout;
                }
                
            }
            if(temp !== 0) out.push(temp);
        }
    }
    return out;
};

var isSameDirection = function(first, second){
    return (first < 0 && second < 0) || (first > 0 && second > 0);
}