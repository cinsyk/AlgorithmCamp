/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function () {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    let min = this.stack.length ? this.getMin() : val;
    val < min && (min = val);
    this.stack.unshift({ val, min });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.shift();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (!this.stack.length) {
        return null;
    }
    return this.stack[0].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (!this.stack.length) {
        return null;
    }
    return this.stack[0].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

