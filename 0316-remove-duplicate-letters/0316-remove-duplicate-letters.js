/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let stack = [];
    let seen = new Set();
    let lastOcc = {};
    for (let i = 0; i < s.length; i++) {
        lastOcc[s[i]] = i;
    }

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (!seen.has(c)) {
            while (stack.length && c < stack[stack.length - 1] && i < lastOcc[stack[stack.length - 1]]) {
                seen.delete(stack.pop());
            }
            seen.add(c);
            stack.push(c);
        }
    }

    return stack.join('');
};