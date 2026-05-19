class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> result = new ArrayList<>();
        Map<String, List<String>> seen = new HashMap<>();
        int[] freq = new int[26];
        for (String word : strs) {
            Arrays.fill(freq, 0);
            for (char ch : word.toCharArray()) {
                freq[ch - 'a']++;
            }
            String key = Arrays.toString(freq);
            if (!seen.containsKey(key)) {
                seen.put(key, new ArrayList<>());
            }
            seen.get(key).add(word);
        }

        return new ArrayList<>(seen.values());
    }
}
