//MergeLinkedList


class AppNode {
    val: string;
    next: AppNode | null;

    constructor(val: string) {
        this.val = val;
        this.next = null;
    }
}

// first node 
const a = new AppNode("a");
const b = new AppNode("b");
const c = new AppNode("c");
const d = new AppNode("d");

a.next = b;
b.next = c;
c.next = d;
// second node 

const e = new AppNode("e");
const f = new AppNode("f");
const g = new AppNode("g");
const h = new AppNode("h");

e.next = f;
f.next = g;
g.next = h;
// public function 

function printNodes(startNode: AppNode | null): void {
    let current = startNode;
    let result = '';

    while (current !== null) {
        result += `${current.val} -> `;
        current = current.next;
    }

    result += 'null';
    console.log(result);
}
// Merge nodes with non recursive solution 
const MergeLinkedList = (head1: AppNode, head2: AppNode): AppNode | null => {
    let current1: AppNode | null = head1;
    let current2: AppNode | null = head2;
    while (current1 && current2) {
        const next1: AppNode | null = current1.next;
        const next2: AppNode | null = current2.next;
        current1.next = current2;
        current2.next = next1;
        current1 = next1;
        current2 = next2;
    }

    printNodes(head1)
    return head1;
}


// Function to print all nodes starting from a given node

console.log("non recursive solution");
console.log("--------------------------------");
//console.log(MergeLinkedList(a, e));

console.log("--------------------------------");

// Merge nodes with recursive solution
console.log("recursive solution");
console.log("--------------------------------");

// Recursive Merge Function
const MergeLinkedListRecursively = (head1: AppNode | null, head2: AppNode | null): AppNode | null => {
    if (head2 == null) return head1;
    if (head1 == null) return head2;
    const next1: AppNode | null = head1.next;
    const next2: AppNode | null = head2.next;
    head1.next = head2;
    head2.next = MergeLinkedListRecursively(next1, next2);
    return head1;
}


console.log(printNodes(MergeLinkedListRecursively(a, e)));
