Solution

The smaller the edit distance of two strings, the more similar they are .If two strings are equal, their edit distance is 0.

Set two pointers i and j for word1 and word2 respectively, traverse the two strings respectively, and only perform the following three operations during the traversal process:

Insert a character
Delete a character
Replace a character: skip if the characters of the two string comparisons are the same
matrix[i][j] indicates the edit distance between the word1 starting from the 0th character to the i-th character and the word2 starting from the 0th character to the j-th character.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let  len1  =  word1.length;
  let  len2  =  word2.length;
  let matrix =[], temp =0;


  for (let i = 0; i <= len1; i++) {
    matrix[i] = [];
    matrix[i][0] = i;
  }

  for (let j = 0; j <= len2; j++) {
    matrix [ 0 ] [ j ]  =  j ;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      word1[i - 1] === word2[j - 1] ? temp = 0 : temp = 1;
      matrix[i][j] = Math.min(matrix[i-1][j] + 1, matrix[i][j-1] + 1, matrix[i-1][j-1] + temp);
    }
  }

  return matrix[len1][len2];  
    
};
