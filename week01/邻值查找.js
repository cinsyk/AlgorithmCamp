class ListNode {
    constructor(prev, val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.prev = prev === undefined ? null : prev;
    }
}

function FindAdjacent(arr) {
    ArrToListNode(arr);
}

function ArrToListNode(arr) {
    let rank = [];
    let head = new ListNode();
    arr.forEach((element, index) => {
        rank.push(index);
    });
    rank.sort((a, b) => arr[a] - arr[b]);
    rank.forEach((item, index) => {
        head.next = index === rank.length - 1 ? null : new ListNode(rank[index + 1]);
        head.prev = index === 0 ? null : new ListNode(rank[index - 1]);
        head.val = item;
    })
    return head;
}

FindAdjacent([1, 3, 5, 4, 2]);