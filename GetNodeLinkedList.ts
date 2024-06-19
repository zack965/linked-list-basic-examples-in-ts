class AppNode {
    val: number;
    next: AppNode | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}


const a = new AppNode(2);
const b = new AppNode(5);
const c = new AppNode(7);
const d = new AppNode(9);

a.next = b;
b.next = c;
c.next = d;
console.log("non recursive solution");
console.log("--------------------------------");
// 1 loop over linked nodes
const GetNodeLinkedList = (head: AppNode, index: number): number | null => {
    let current: AppNode | null = head;
    let count = 0;
    while (current) {
        if (count == index) {
            return current.val;
        }
        current = current?.next;
        count += 1;
    }
    return null;
}

console.log(GetNodeLinkedList(a, 2));
;
console.log("--------------------------------");


// 1 loop over linked nodes Recursively
console.log("recursive solution");
console.log("--------------------------------");
let count = 0;
const GetNodeLinkedListRecursivelyWithCountExternal = (head: AppNode | null, index: number, count: number): number | null => {
    if (head === null) return null;
    if (count == index) return head.val;
    count++;
    return GetNodeLinkedListRecursivelyWithCountExternal(head.next, index, count);

}

console.log(GetNodeLinkedListRecursivelyWithCountExternal(a, 2, count));

console.log("--------------------------------");


// 1 loop over linked nodes Recursively
console.log("recursive solution");
console.log("--------------------------------");
const GetNodeLinkedListRecursivelyWithoutCount = (head: AppNode | null, index: number): number | null => {
    if (head === null) return null;
    if (index == 0) return head.val;
    return GetNodeLinkedListRecursivelyWithoutCount(head.next, index - 1);

}

console.log(GetNodeLinkedListRecursivelyWithoutCount(a, 2));

console.log("--------------------------------");


