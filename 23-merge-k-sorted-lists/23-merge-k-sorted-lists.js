/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2) return l1 ? l1 : l2
    if(l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next,l2)
        return l1
    }else{
        l2.next = mergeTwoLists(l1,l2.next)
        return l2
    }
    
};

var mergeKLists = function(lists) {
    if(lists.length < 1)return null
    let sorttedLists = lists[0] 
    for(let i =1; i<lists.length; i++) sorttedLists = mergeTwoLists(sorttedLists,lists[i])
    
    return sorttedLists
};