class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    naiveApproach(nums) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    return true;
                }
            }
        }
        return false;

    }

    optimizedApproach(nums) {
        let seen = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) {
                return true;
            }
            seen.add(nums[i]);
        }
        return false;

    }
    hasDuplicate(nums) {
        // naive approach
        // return this.naiveApproach(nums);
        return this.optimizedApproach(nums);


    }


};
