/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n=gas.length;
    let total_gas=0,total_cost=0;
    let curr_gas=0, starting_point=0;
    for(let i=0;i<n;i++)
    {
        //these two variable are to check if no case is possible
        total_gas+=gas[i];
        total_cost+=cost[i];
        //for checking the total present gas at index i
        curr_gas+=gas[i]-cost[i];
        if(curr_gas<0)
        {
           //there is a breakdown....so we will start from next point or index
            starting_point=i+1;
            //reset our fuel 
            curr_gas=0;
        }
    }
    return (total_gas<total_cost)?-1:starting_point; 
};