class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        let charCountArr = new Array(256).fill(0)
        for (let i = 0; i < s.length; i++) {
            charCountArr[s.charCodeAt(i)]++;
        }
        for (let j = 0; j < t.length; j++) {
            charCountArr[t.charCodeAt(j)]--;
            if (charCountArr[t.charCodeAt(j)] < 0) return false;
        }
        return true;
    }
}
