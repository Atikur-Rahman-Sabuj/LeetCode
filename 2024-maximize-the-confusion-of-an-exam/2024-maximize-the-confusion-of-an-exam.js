/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let left = 0
    let right = 0
    let res = -Infinity

    let tCnt = 0
    let fCnt = 0

    for (right = 0; right < answerKey.length; right++) {
        const ans = answerKey[right]

        if (ans === 'T') tCnt++
        if (ans === 'F') fCnt++
        
        while (Math.min(tCnt, fCnt) > k) {
            const prevW = answerKey[left]

            if (prevW === 'T') {
                tCnt--
            }

            if (prevW === 'F') {
                fCnt--
            }

            left++
        }

        let currentLen = right - left + 1
        res = Math.max(res, currentLen)
    }

    return res
};