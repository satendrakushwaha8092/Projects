






















function isCurrentWindowValid(count,k) {
    let curr_u_c = 0
    for (let i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            curr_u_c++
        }
    }
    return k>curr_u_c
}

function findKthLargestSubstring(str, k = 3) {
    let u_c_count = 0
    let count = []
    for (let i = 0; i < 26; i++) {
        count.push(0)
    }
    for (let i = 0; i < str.length; i++) {
        if (count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
            u_c_count++
        }
        count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++

    }
    if (k> u_c_count) {
        console.log("substring can not formed")
    }
    for (let i = 0; i < 26; i++) {
        count[i] = 0
    }
    let start = 0
    let end = 0
    let max_window_size = 1
    let max_window_start = 0
    count[str[0].charCodeAt(0) - 'a'.charCodeAt(0)]++

    for (let i = 0; i < str.length; i++) {
        count[str[0].charCodeAt(0) - 'a'.charCodeAt(0)]++
        end++
    }

    while (!isCurrentWindowValid(count, k)) {
        count[str[start]].charCodeAt(0) - 'a'.charCodeAt(0)--
        start++
    }
    if(end-start+1>max_window_size){
        max_window_size=end-start+1
        max_window_start=start
    }
    console.log(max_window_size,max_window_start)
}
findKthLargestSubstring("aababebebe",3)