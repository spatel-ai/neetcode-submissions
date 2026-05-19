class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    removeNonAlphanumeric(str) {
        return str.replace(/[^a-zA-Z0-9]/g, '');
    }
    isPalindrome = function (s) {
        let i = 0;
        let isPalindrome = true;
        s = this.removeNonAlphanumeric(s).toLowerCase();
        console.log(s)
        let j = s.length - 1;

        while (i <= j) {
            console.log(i, j)
            console.log(s[i], s[j])
            if (s[i] != s[j]) {
                isPalindrome = false
            }
            i++
            j--

        }
        return isPalindrome

    };

}
