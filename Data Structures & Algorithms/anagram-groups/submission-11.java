class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> seen = new HashMap<>();
        for (String word : strs) {
            char [] charS = word.toCharArray();
            Arrays.sort(charS);
            String key = new String (charS);
            seen.putIfAbsent(key, new ArrayList<>());
            seen.get(key).add(word);
        }
        return new ArrayList<>(seen.values());
    }
}
