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
const LoopOverLinkedNodesAndReturnSumOfElements = (head: AppNode): number => {
    let current: AppNode | null = head;
    let sum: number = 0;
    while (current) {
        sum += current.val;
        current = current?.next;
    }
    return sum;
}

console.log(LoopOverLinkedNodesAndReturnSumOfElements(a));
;
console.log("--------------------------------");


// 1 loop over linked nodes Recursively
console.log("recursive solution");
console.log("--------------------------------");

const LoopOverLinkedNodesAndReturnSumOfElementsRecursively = (head: AppNode | null): number => {
    if (head === null) return 0;
    return head.val + LoopOverLinkedNodesAndReturnSumOfElementsRecursively(head.next);

}

console.log(LoopOverLinkedNodesAndReturnSumOfElementsRecursively(a));

console.log("--------------------------------");


