/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = (t, pos, speed) => MonotonicStack(t, pos, speed);

const MonotonicStack = (target, pos, speed) => {
    let n = pos.length, st = [], m = new Map();
    for (let i = 0; i < n; i++) m.set(pos[i], speed[i]);
    pos.sort((x, y) => x - y);
    for (const cur of pos) {
        let cursp = m.get(cur), time = (target - cur) / cursp; // time to reach target
        while (st.length >= 1 && time >= st[st.length - 1]) st.pop(); // less time can chase up to more time car, so pop the less time elements (being chased up)
        st.push(time);
    }
    return st.length;
};