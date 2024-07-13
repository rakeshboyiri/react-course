const sort = (a, len) => {
    if(len <= 1) return a;
    let mid = Math.floor(len / 2);
    let left = a.slice(0, mid);
    let right = a.slice(mid, len);
    return merge(sort(left, mid), sort(right, len - mid));
}

const merge = (left, right) => {
    let result = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}
