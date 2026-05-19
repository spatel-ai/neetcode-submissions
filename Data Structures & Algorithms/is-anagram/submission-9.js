class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s, t) {
        let characters = Array(26).fill(0);
        for (let ch of s) {
            let index = ch.charCodeAt(0) - "a".charCodeAt(0);
            characters[index] += 1;
        }

        for (let ch of t) {
            let index = ch.charCodeAt(0) - "a".charCodeAt(0);
            characters[index] -= 1;
            if (characters[index] < 0) return false;
        }
        let result = characters.every(item => item == 0);
        return result;
    }
}
