/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, p, q) {
    if (p === q) {
    return head;
  }

  let current = head,
    previous = null;
  let i = 0;
  while (current !== null && i < p - 1) {
    previous = current;
    current = current.next;
    i += 1;
  }

  const last_node_of_first_part = previous;
  const last_node_of_sub_list = current;
  let next = null; 

  i = 0;
  while (current !== null && i < q - p + 1) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i += 1;
  }
    
  last_node_of_first_part ? last_node_of_first_part.next = previous : head = previous
  
  last_node_of_sub_list.next = current;
    
  return head;
};