function LinkedList () {
  let head = null;
  
  return {
    createNode(data) {
      return {
        data: data,
        next: null
      }
    },
    addNode(node) {
      if (!head) {
        head = node;
      } else {
        let currentNode = head;
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = node;
      }
    },
    removeNode(data) {
      if (!head) {
        return null;
      } else if (head.data === data) {
        head = head.next;
      } else {
        let currentNode = head;

        while (currentNode && currentNode.next) {
          if (currentNode.next.data === data) {
            currentNode.next = currentNode.next.next;
          }
          currentNode = currentNode.next;
        }
      }
    },
    printList() {
      if (!head) {
        console.log('Empty linked list');
      } else {
        let output = '';
        let currentNode = head;
        output += currentNode.data + '->';
        while (currentNode.next) {
          currentNode = currentNode.next;
          output += currentNode.data + '->';
        }
        console.log(output);
      }
    }
  }
}

// Test output
let list = LinkedList();
let n1 = list.createNode('A');
let n2 = list.createNode('B');
let n3 = list.createNode('C');
let n4 = list.createNode('D');
let n5 = list.createNode('E');
list.printList();
list.addNode(n1);
list.printList();
list.addNode(n2);
list.printList();
list.addNode(n3);
list.printList();
list.addNode(n4);
list.printList();
list.addNode(n5);
list.printList();
list.removeNode('C');
list.printList();
list.removeNode('D');
list.printList();
list.removeNode('A');
list.printList();
list.removeNode('E');
list.printList();
list.removeNode('B');
list.printList();
