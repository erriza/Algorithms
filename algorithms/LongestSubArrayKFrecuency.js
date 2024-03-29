nums = [1,2,3,1,2,3,1,2];
k = 2;

function maxSubArrayLength(nums, k) {
    const map = {};
    let l = 0;
    let r = 0;
    let res = 0;
    
    while(r < nums.length) {
        map[nums[r]] = (map[nums[r]] || 0) +1;

        while(map[nums[r]] > k) {
            map[nums[l]] -= 1;
            l += 1
        }
        res = Math.max(res, r - l + 1);
        r++;
        console.log('map', map)
    }
    return res;
}

console.log(maxSubArrayLength(nums, k))