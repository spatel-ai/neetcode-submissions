class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Queue<int[]> pq = new PriorityQueue<>((a, b) -> b[1] - a[1]);
        Map<Integer, Integer> freq = new HashMap<>();
        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }
        for(Map.Entry<Integer, Integer> entry : freq.entrySet()){
            pq.offer(new int[]{entry.getKey(), entry.getValue()});
        }
        int[] result = new int[k];
        while(!pq.isEmpty() && k > 0){
            k--;
            result[k] = pq.poll()[0];
        }
        return result;
    }
}
