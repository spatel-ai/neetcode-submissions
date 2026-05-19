class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    naiveApproach(s, t) {
        return s.split("").sort().join(",") == t.split("").sort().join(",");
    }
    isAnagram(s, t) {
        return this.naiveApproach(s, t);

    }
}
