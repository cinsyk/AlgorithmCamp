/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }
// let test = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
var reverseKGroup = function (head, k) {
    // 保护节点防止出现访问null的情况
    let protect = new ListNode();
    // 通过last记录节点边界信息
    let last = protect;
    while (head !== null) {
        // 先分组
        let end = getEnd(head, k);
        if (end === null) break;
        let nextGroupHead = end.next;
        // 内部反转
        reverseList(head, nextGroupHead);

        // 连接已经翻转的链表的边界。
        last.next = end;
        head.next = nextGroupHead;

        // 继续往后走
        last = head;
        head = nextGroupHead;
    }
    return protect.next;
};

function getEnd(head, k) {
    while (head !== null) {
        k--;
        // 如果k为0，则直接返回head；
        if (k === 0) return head;
        head = head.next;
    }
    // head 为空则直接返回null，说明剩余个数不满一组
    return null;
}

function reverseList(start, stop) {
    let prev = null;
    while (start !== stop) {
        let curr = start.next;
        start.next = prev;
        prev = start
        start = curr;
    }
}
// reverseKGroup(test, 2);
// @lc code=end

