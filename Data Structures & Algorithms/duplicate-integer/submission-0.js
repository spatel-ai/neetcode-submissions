class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let duplicates = {}

        for (let i = 0; i < nums.length; i++) {
            console.log(duplicates)
            if (duplicates.hasOwnProperty(nums[i])) {
                return true;
            } else {
                duplicates[nums[i]] = i
            }

        }
        return false
    }
}
