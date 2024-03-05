/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    s = 'd'+s+'d'
    let st = 0, en = s.length - 1;
    while(s[st] == s[en]){
        while(s[st] == s[st+1]){
            st++;
        }
        st++;
        while(s[en] == s[en-1]){
            en--;
        }
        en--;
        if(en == st) return 1;
        if(en < st) return 0;
    }
    return en - st + 1;
};