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
var reverseKGroup = function(head, k) {
      if (k <= 1 || head === null) {
    return head;
  }
    
    let len =0
    let tmp =head
    while(tmp){
        tmp = tmp.next
        len++
    }

  let current = head,
    previous = null;
    let x=0
  while (x+k<=len) {
      //console.log(x)
    const last_node_of_previous_part = previous;
    // after reversing the LinkedList 'current' will become the last node of the sub-list
    const last_node_of_sub_list = current;
    let next = null; // will be used to temporarily store the next node
    let i = 0;
    while (current !== null && i < k) { // reverse 'k' nodes
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i += 1;
    }

    // connect with the previous part
    if (last_node_of_previous_part !== null) {
      last_node_of_previous_part.next = previous;
    } else {
      head = previous;
    }
    // connect with the next part
      if (last_node_of_sub_list !== null &&last_node_of_previous_part) {
      last_node_of_previous_part.next = previous;
    }
    last_node_of_sub_list.next = current;

    
    previous = last_node_of_sub_list;
    x+=k
  }
  return head;
};