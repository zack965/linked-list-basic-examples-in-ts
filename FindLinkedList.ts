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
const FindLinkedList = (head: AppNode, target: number): boolean => {
    let current: AppNode | null = head;
    let exists = false;
    while (current) {
        if (current.val == target) exists = true
        current = current?.next;
    }
    return exists;
}

console.log(FindLinkedList(a, 77));
;
console.log("--------------------------------");


// 1 loop over linked nodes Recursively
console.log("recursive solution");
console.log("--------------------------------");

const FindLinkedListRecursively = (head: AppNode | null, target: number): boolean => {
    if (head === null) return false;
    if (head.val) return true;
    return FindLinkedListRecursively(head.next, target);

}

console.log(FindLinkedListRecursively(a, 77));

console.log("--------------------------------");


