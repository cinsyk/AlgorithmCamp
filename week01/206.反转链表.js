/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // 记录上一个节点
    let prev = null;
    // 遍历所有节点
    while (head !== null) {
        // 记录下一个节点位置
        let curr = head.next;
        // 修改当前节点的next指向
        head.next = prev;
        // 修改下一个节点
        prev = head;
        head = curr;

    }
    return prev;
};
// @lc code=end

