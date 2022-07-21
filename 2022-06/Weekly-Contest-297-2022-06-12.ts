//Weekly-Contest-297-2022-06-12.ts

//5259. Calculate Amount Paid in Taxes
//Accepted
function calculateTax(brackets: number[][], income: number): number {
   let tax = 0;
   let taxableAmount = Math.min(brackets[0][0], income);
   income -= taxableAmount;
   tax += (taxableAmount * brackets[0][1]) / 100;
   for (let i = 1; i < brackets.length; i++) {
      if (income <= 0) break;
      taxableAmount = Math.min(brackets[i][0] - brackets[i - 1][0], income);
      income -= taxableAmount;
      tax += (taxableAmount * brackets[i][1]) / 100;
   }
   return tax;
}

//5289. Fair Distribution of Cookies
//Accepted later
function distributeCookies(cookies: number[], k: number): number {
   let result = Number.MAX_SAFE_INTEGER;
   const distribution: number[] = Array(k).fill(0);
   function distributionFunction(position: number, max: number) {
      if (position === cookies.length) {
         result = Math.min(result, max);
         return;
      }
      for (let i = 0; i < k; i++) {
         distribution[i] += cookies[position];
         distributionFunction(position + 1, Math.max(max, distribution[i]));
         distribution[i] -= cookies[position];
      }
   }
   distributionFunction(0, 0);
   return result;
}

//6094. Naming a Company
//Accepted later
//console.log(distinctNames(["coffee", "donuts", "time", "toffee"]));

//import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
// Deno.test("Test program", () => {
//    const ans = distinctNames(["coffee", "donuts", "time", "toffee"]);
//    assertEquals(ans, 2);
// });

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
   //Time limit exceeded
   // const map: Map<string, Boolean> = new Map();
   // let result = 0;
   // for (let i = 0; i < ideas.length; i++) {
   //    map.set(ideas[i], true);
   // }
   // let n1 = "",
   //    n2 = "";
   // for (let i = 0; i < ideas.length - 1; i++) {
   //    for (let j = i + 1; j < ideas.length; j++) {
   //       n1 = ideas[j][0] + ideas[i].substring(1);
   //       n2 = ideas[i][0] + ideas[j].substring(1);
   //       if (!map.has(n1) && !map.has(n2)) {
   //          result++;
   //       }
   //    }
   // }
   // return result * 2;
}
