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
const ReverseLinkedList = (head: AppNode): number | undefined => {
    let current: AppNode | null = head;
    let prev: AppNode | null = null;
    while (current) {
        const next: AppNode | null = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev?.val;
}

//console.log(ReverseLinkedList(a));

console.log("--------------------------------");





// 1 loop over linked nodes Recursively
console.log("recursive solution");
console.log("--------------------------------");
const AppNodeRecursively = (head: AppNode | null, prev: AppNode | null = null): number | undefined => {
    if (head === null) return prev?.val;
    const next: AppNode | null = head.next;
    head.next = prev;
    return AppNodeRecursively(next, head);
}

console.log(AppNodeRecursively(a));

console.log("--------------------------------");


