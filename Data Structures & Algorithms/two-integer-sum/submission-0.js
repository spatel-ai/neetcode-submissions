class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    naiveApproach(nums, target) {

    }
    optimizedApproach(nums, target) {
        let pairs = new Map();
        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (pairs.has(diff)) {
                return [i, pairs.get(diff)];
            }
            pairs.set(nums[i], i);
        }
        return []
    }
    twoSum(nums, target) {
        return this.optimizedApproach.apply({}, [nums, target]);
    }
}
