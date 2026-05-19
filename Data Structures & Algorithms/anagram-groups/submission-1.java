class Solution {

    public String createKey(String word) {
        int[] chars = new int[26];
        for (int i = 0; i < word.length(); i++) {
            chars[(word.charAt(i) - 'a')]++;
        }
        return Arrays.toString(chars);
    }

    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> words = new ArrayList<>();
        Map<String, List<String>> store = new HashMap<>();
        if (strs.length == 1) {
            words.add(Arrays.asList(strs[0]));
            return words;
        }

        for (String word : strs) {
            String key = createKey(word);
            if (!store.containsKey(key)) {
                store.put(key, new ArrayList<String>());
            }
            store.get(key).add(word);
        }

        for (List<String> pairs : store.values()) {
            words.add(pairs);
        }
        return words;
    }
}