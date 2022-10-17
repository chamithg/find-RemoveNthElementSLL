/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  let leftPointer = dummyHead;
  let rightPointer = head;
  let counter = 1;

  while (rightPointer.next) {
    rightPointer = rightPointer.next;
    counter += 1;
    if (counter > n) {
      leftPointer = leftPointer.next;
    }
  }
  console.log(counter);

  leftPointer.next = leftPointer.next.next;

  return dummyHead.next;
}

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class SLL {
  constructor(head) {
    this.head = head;
  }
}
