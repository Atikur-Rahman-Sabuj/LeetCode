//Biweekly-Contest-80-2022-06-11

//6095. Strong Password Checker II
//Accepted
function strongPasswordCheckerII(password: string): boolean {
   if (password.length < 8) return false;
   const criteria = {
      oneLower: false,
      oneUpper: false,
      oneNumber: false,
      oneSpecial: false,
      hasNoAdjacent: true,
   };
   for (let i = 0; i < password.length; i++) {
      if (password[i].charCodeAt(0) >= "a".charCodeAt(0) && password[i].charCodeAt(0) <= "z".charCodeAt(0))
         criteria.oneLower = true;
      if (password[i].charCodeAt(0) >= "A".charCodeAt(0) && password[i].charCodeAt(0) <= "Z".charCodeAt(0))
         criteria.oneUpper = true;
      if (password[i].charCodeAt(0) >= "0".charCodeAt(0) && password[i].charCodeAt(0) <= "9".charCodeAt(0))
         criteria.oneNumber = true;
      if ("!@#$%^&*()-+".includes(password[i])) criteria.oneSpecial = true;
      if (i > 0 && password[i] === password[i - 1]) criteria.hasNoAdjacent = false;
   }
   return criteria.oneLower && criteria.oneUpper && criteria.oneNumber && criteria.oneSpecial && criteria.hasNoAdjacent;
}

//6096. Successful Pairs of Spells and Potions
//Accepted
function successfulPairs(spells: number[], potions: number[], success: number): number[] {
   potions.sort((a, b) => a - b);
   const result: number[] = [];
   function findIntersection(start, end, spell) {
      //console.log(start, end);

      let m = Math.ceil((start + end) / 2);
      let m2 = m - 1;
      if (
         (spell * potions[m] >= success && spell * potions[m2] < success) ||
         (spell * potions[m] >= success && m === 0)
      ) {
         return m;
      }
      if (start === end) return potions.length;
      if (spell * potions[m] < success) {
         return findIntersection(m, end, spell);
      }
      return findIntersection(start, m - 1, spell);
   }
   for (let i = 0; i < spells.length; i++) {
      result[i] = potions.length - findIntersection(0, potions.length - 1, spells[i]);
   }

   return result;
}

//6097. Match Substring After Replacement
//Accepted later
function matchReplacement(s: string, sub: string, mappings: string[][]): boolean {
   const map = new Map<string, boolean>();
   for (let i = 0; i < mappings.length; i++) {
      map.set(mappings[i][0] + mappings[i][1], true);
   }
   function checkMatch(start: number) {
      for (let i = 0; i < sub.length; i++) {
         if (sub[i] === s[start] || map.has(sub[i] + s[start])) {
            start++;
         } else {
            return false;
         }
      }
      return true;
   }
   for (let i = 0; i < s.length; i++) {
      if (checkMatch(i)) {
         return true;
      }
   }
   return false;
}
