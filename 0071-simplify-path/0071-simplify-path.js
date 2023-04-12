/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    let lastWord = "";
    for(let i = 0 ; i <= path.length ; i++){
        if(path[i] === "/" || i === path.length){
            if(lastWord === ".."){
                if(stack.length > 0) stack.pop();
            }else if(lastWord.length > 0 && lastWord !== "."){
                stack.push(lastWord);
            }
            lastWord = "";
        }else{
            lastWord += path[i];
        }
    }
    return "/"+stack.join("/");
};