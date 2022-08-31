function longestPalindrome(s: string): string {
   if (s.length < 2) {
      return s;
   }
   let maxLength = 0;
   let start = 0;
   let end = 0;
   for (let i = 0; i < s.length; i++) {
      let len = expandAroundCenter(s, i, i);
      if (len > maxLength) {
         maxLength = len;
         start = i - (len - 1) / 2;
         end = i + (len - 1) / 2;
      }
      len = expandAroundCenter(s, i, i + 1);
      if (len > maxLength) {
         maxLength = len;
         start = i - Math.floor((len - 1) / 2);
         end = i + Math.ceil((len - 1) / 2);
      }
   }
   return s.substring(start, end + 1);
}
function expandAroundCenter(s: string, left: number, right: number): number {
   let L = left;
   let R = right;
   while (L >= 0 && R < s.length && s[L] === s[R]) {
      L--;
      R++;
   }
   return R - L - 1;
}