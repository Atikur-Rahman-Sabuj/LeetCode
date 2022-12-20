/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const vst = new Map();
    const st = [0];
    while(st.length > 0){
        const temp = st.pop();
        vst.set(temp, 1);
        for(let i = 0 ; i < rooms[temp].length ; i++){
            if(!vst.has(rooms[temp][i])){
                st.push(rooms[temp][i]);
            }
        }
    }
    return vst.size === rooms.length;
};