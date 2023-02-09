function distinctNames(ideas: string[]): number {
   const map: Map<string, boolean> = new Map();
   const f: number[][] = Array(26);
   for (let i = 0; i < 26; i++) {
      f[i] = Array(26).fill(0);
   }
   let result = 0;
   const characters = "abcdefghijklmnopqrstuvwxyz";
   for (let i = 0; i < ideas.length; i++) {
      map.set(ideas[i], true);
   }
   for (let i = 0; i < ideas.length; i++) {
      const a = ideas[i][0].charCodeAt(0) - "a".charCodeAt(0);
      for (const iterator of characters) {
         const n = iterator + ideas[i].substring(1);
         if (!map.has(n)) {
            const b = iterator.charCodeAt(0) - "a".charCodeAt(0);
            f[a][b]++;
         }
      }
   }
   for (let i = 0; i < ideas.length; i++) {
      for (const iterator of characters) {
         const n = iterator + ideas[i].substring(1);
         if (!map.has(n)) {
            result += f[iterator.charCodeAt(0) - "a".charCodeAt(0)][ideas[i][0].charCodeAt(0) - "a".charCodeAt(0)];
         }
      }
   }
   return result;
};