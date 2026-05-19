class Solution {

    public String encode(List<String> strs) {
         String res = "";
        for (String s : strs) {
            res += s.length() + "#" + s;
        }
        System.out.println(res);
        return res;
        

    }

    public List<String> decode(String str) {
         List<String> list = new ArrayList<>();
        int i = 0;
        int pointer = 0;
        while (i < str.length()) {
            if (str.charAt(i) == '#') {
                int end = Integer.parseInt(String.valueOf(str.substring(pointer, i)));
                String subStr = "";
                subStr += str.substring(i + 1, i + end + 1);
                list.add(subStr);
                i = i + end + 1;
                pointer = i;
            } else {
                i++;
            }
        }
        return list;

    }
}
