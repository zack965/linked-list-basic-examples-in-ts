class AppNode {
    val: string;
    next: AppNode | null;

    constructor(val: string) {
        this.val = val;
        this.next = null;
    }
}


const a = new AppNode("a");
const b = new AppNode("b");
const c = new AppNode("c");
const d = new AppNode("d");

a.next = b;
b.next = c;
c.next = d;
console.log("non recursive solution");
console.log("--------------------------------");
// 1 loop over linked nodes
const LoopOverLinkedNodes = (head: AppNode) => {
    let current: AppNode | null = head;
    while (current) {
        console.log(current.val);
        current = current?.next;
    }
}

LoopOverLinkedNodes(a);
console.log("--------------------------------");


// 1 loop over linked nodes Recursively
console.log("recursive solution");
console.log("--------------------------------");

const LoopOverLinkedNodesRecursively = (head: AppNode | null) => {
    if (head === null) return;
    console.log(head.val);
    LoopOverLinkedNodesRecursively(head.next)

}

LoopOverLinkedNodesRecursively(a);
console.log("--------------------------------");


