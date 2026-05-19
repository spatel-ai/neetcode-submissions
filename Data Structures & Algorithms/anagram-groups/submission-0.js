class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let pairs = new Map();
        for (let str of strs) {
            let key = str.split("").sort().join("");
            if (!pairs.has(key)) {
                pairs.set(key, []);
            }
            pairs.get(key).push(str);
        }
        return Array.from(pairs.values());

    };
}
