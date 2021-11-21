/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let signMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (signMap[s[i]]) {
            stack.push(s[i]);
            continue;
        }
        let sign = stack.pop();
        if (s[i] === signMap[sign]) {
            continue;
        }
        return false;
    }

    return !stack.length;
};
// @lc code=end

