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
      return findIntersection(start, m-1, spell);
   }
   for (let i = 0; i < spells.length; i++) {
      result[i] = potions.length - findIntersection(0, potions.length - 1, spells[i]);
   }

   return result;
};