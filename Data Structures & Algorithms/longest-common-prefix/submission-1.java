class Solution {
    public String longestCommonPrefix(String[] strs) {
        int n = strs[0].length();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            Character ch = null;
            for (String str : strs) {
                if (i >= str.length()) {
                    return sb.toString();
                }
                if (ch == null) {
                    ch = str.charAt(i);
                }
                if (ch != str.charAt(i)) {
                    return sb.toString();
                }
            }
            sb.append(ch);
        }
        return sb.toString();
    }
}