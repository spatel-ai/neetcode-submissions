class Solution {
    public boolean isValidSudoku(char[][] board) {
        int n = board.length;

        for (int row = 0; row < n; row++) {
            Set<Character> seen = new HashSet<>();
            for (int col = 0; col < n; col++) {
                Character ch = board[row][col];
                if (ch == '.')
                    continue;
                if (seen.contains(ch)) {
                    return false;
                }
                seen.add(ch);
            }
        }

        for (int row = 0; row < n; row++) {
            Set<Character> seen = new HashSet<>();
            for (int col = 0; col < n; col++) {
                Character ch = board[col][row];
                if (seen.contains(ch) && ch != '.') {
                    return false;
                }
                seen.add(ch);
            }

        }

        for (int square = 0; square < n; square++) {
            Set<Character> seen = new HashSet<>();
            for (int row = 0; row < n / 3; row++) {
                for (int col = 0; col < n / 3; col++) {
                    int rowIdx = (square / 3) * 3 + row;
                    int colIdx = (square % 3) * 3 + col;
                    char ch = board[rowIdx][colIdx];
                    if (seen.contains(ch) && ch != '.') {
                        return false;
                    }
                    seen.add(ch);
                }
            }
        }
        return true;
    }
        
  
}
