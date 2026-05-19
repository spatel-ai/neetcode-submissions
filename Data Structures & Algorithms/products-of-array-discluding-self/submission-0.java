class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] leftArr = new int[n];
        int[] rightArr = new int[n];
        int[] productOfArrExceptSelf = new int[n];
        leftArr[0] = 1;
        rightArr[n - 1] = 1;

        for (int i = 1; i < n; i++) {
            leftArr[i] = nums[i - 1] * leftArr[i - 1];
        }
        for (int i = n - 2; i >= 0; i--) {
            rightArr[i] = nums[i + 1] * rightArr[i + 1];
        }
        for (int k = 0; k < n; k++) {
            productOfArrExceptSelf[k] = leftArr[k] * rightArr[k];
        }
        return productOfArrExceptSelf;
    }
}