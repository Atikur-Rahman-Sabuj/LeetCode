/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* deleteNodes(ListNode* head, int m, int n) {
    ListNode* ans = head;
    while(head){

        int i = m-1;
        while(i-- && head){
            head = head->next;
        }
        if(!head){
            break;
        }


        int j = n;
        while(j-- && head->next){
            head->next = head->next->next;
        }
        if(head){
            head = head->next;
        }
        else break;

        
    }

    return ans;
    }
};