/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head || !head.next) return head
    
    // split the list
    let left = head
    let right = getMid(head)
    const temp = right.next
    right.next = null
    right = temp
    
    return merge(sortList(left) , sortList(right))
    
};

const getMid = (head) =>{
    let slow = head , fast = head.next
    while (fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

const merge = (left,right)=>{
    let tail = new ListNode()
    const temp = tail
    
    while(left && right){
        
        if(left.val < right.val) {
            tail.next = left
            left = left.next
        }else{
            tail.next = right
            right = right.next
        }
        
        tail = tail.next
    }
    
    if(left)  tail.next = left
    if(right)  tail.next = right

    return temp.next
   
    
}