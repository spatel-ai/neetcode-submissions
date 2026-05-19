class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    naiveApproach(s, t) {
        return s.split("").sort().join(",") == t.split("").sort().join(",");
    }
    optimizedApproach(s, t) {
        if (s.length != t.length) {
            return false;
        }
        let visitedWords = new Map();
        for (let i = 0; i < s.length; i++) {
            if (visitedWords.has(s[i])) {
                visitedWords.set(s[i], visitedWords.get(s[i]) + 1);
            } else {
                visitedWords.set(s[i], 1);
            }
        }
        for (let char of t) {
            if (visitedWords.has(char)) {
                visitedWords.set(char, visitedWords.get(char) - 1)
            }
        }
        for (let [key, val] of visitedWords) {
            if (val != 0) {
                return false;
            }
        }
        return true;
    }
    isAnagram(s, t) {
        let showOptimized = true;
        if (showOptimized) {
            return this.optimizedApproach(s, t);
        }
        return this.naiveApproach(s, t);

    }
}
