//Weekly-Contest-298-2022-06-19.ts

//5242. Greatest English Letter in Upper and Lower Case
//Accepted
function greatestLetter(s: string): string {
   const upper = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
   const lower = "zyxwvutsrqponmlkjihgfedcba";
   for (let i = 0; i < 26; i++) {
      if (s.indexOf(upper[i]) !== -1 && s.indexOf(lower[i]) !== -1) {
         return upper[i];
      }
   }
   return "";
}

//5218. Sum of Numbers With Units Digit K
//Accepted later
function minimumNumbers(num: number, k: number): number {
   if (num === 0) return 0;
   if (k === 0 && num % 10 === 0) return 1;
   if (k === 0) return -1;
   for (let i = 1; i <= num / k; i++) {
      if ((i * k) % 10 === num % 10) return i;
   }
   return -1;
}

//6099. Longest Binary Subsequence Less Than or Equal to K
//Accepted later
function longestSubsequence(s: string, k: number): number {
   let ans = 0;
   let value = 0;
   for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === "0") {
         ans++;
      } else {
         if (s[i] === "1" && value <= k) {
            //console.log(s.length - i - 1)
            value += 2 ** (s.length - i - 1);
         }
         if (value <= k) {
            //console.log(value)
            ans++;
         }
      }
   }
   return ans;
}
