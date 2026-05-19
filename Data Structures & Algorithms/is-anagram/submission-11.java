class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length())
            return false;
        int n = s.length();
        int[] counter = new int[26];
        for (int i = 0; i < n; i++) {
            counter[s.charAt(i) - 'a']++;
            counter[t.charAt(i) - 'a']--;
        }

        for (int num : counter) {
            if (num > 0) {
                return false;
            }
        }
        return true;
    }
}
