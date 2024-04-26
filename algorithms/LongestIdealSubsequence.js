
var longestIdealString = function(s, k) {
    let map = new Map();

    for(let i = 0; i < 26; i++) {
        map.set(i, 0)
    }

    for(let char of s) {
        const curChar = Number(char.charCodeAt() - 97);

        let [leftBoundry, rightBoundry] = [
            curChar - k >= 0 ? curChar - k : 0,
            curChar + k <= 0 ? curChar + k : 25,
        ]

        let curMax = 0;
        for(let i = leftBoundry; i <= rightBoundry; i++) {
            curMax = Math.max(curMax, map.get(i));
        }
        map.set(curChar, curMax + 1);
    }

    let res = 0;
    for(let [_, val] of map) {
        val > res ? (res = val) : (res = res);
    }
    return res;
}

module.exports = {
    longestIdealString,
}