/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    let dc = 0;
    dominoes = dominoes.split("");
    for(let i = 0 ; i < dominoes.length ; i++){
        if(dominoes[i] === "."){
            dc++;
        }else{
            if(dc > 0){
                solve(i-dc-1, i);
                dc = 0;
            }
        }
    }
    if(dc > 0){
        solve(dominoes.length - dc - 1, dominoes.length)
    }
    return dominoes.join("");
    function solve(s,e){
        //console.log(s,e)
        if(s >= e) return;
        if(s < 0 && dominoes[e] === "L"){
            for(let i = 0 ; i < e ; i++){
                dominoes[i] = dominoes[e];
            }
        }else if(e === dominoes.length && dominoes[s] === "R"){
            for(let i = s+1 ; i < e ; i++){
                dominoes[i] = dominoes[s];
            }
        }
        else if(s < 0 && e === dominoes.length){
            
        }
        else{
            if(e-s > 2){
                let ns = s, ne = e;
                if(dominoes[s] === "R"){
                    dominoes[s+1] = dominoes[s];
                    ns = s + 1;
                }if(dominoes[e] === "L"){
                    dominoes[e-1] = dominoes[e];
                    ne = e - 1;
                }
                if(ns !== s || ne !== e)
                    solve(ns, ne);
            }else{
                if(dominoes[s] === dominoes[e]){
                    dominoes[s+1] = dominoes[s];
                }
            }
        }

    }
};