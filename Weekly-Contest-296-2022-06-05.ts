//Weekly-Contest-296-2022-06-05

//6090. Min Max Game
//Accepted
function minMaxGame(nums: number[]): number {
   let n = nums.length / 2;
   while (n >= 1) {
      for (let i = 0; i < n; i++) {
         if (i & 1) {
            nums[i] = Math.max(nums[i * 2], nums[2 * i + 1]);
         } else {
            nums[i] = Math.min(nums[i * 2], nums[2 * i + 1]);
         }
      }
      n = n / 2;
   }
   return nums[0];
}

//6091. Partition Array Such That Maximum Difference Is K
//Accepted
function partitionArray(nums: number[], k: number): number {
   nums = nums.sort((a, b) => a - b);
   let subSeq = 0;
   let min = nums[0],
      max = nums[0];
   for (let i = 1; i < nums.length; i++) {
      min = Math.min(min, nums[i]);
      max = Math.max(max, nums[i]);
      if (max - min > k) {
         subSeq++;
         min = max = nums[i];
      }
      //console.log(min, max);
   }
   return ++subSeq;
}

//6092. Replace Elements in an Array
//Accepted
function arrayChange(nums: number[], operations: number[][]): number[] {
   let valIndex: number[] = Array(1000000).fill(-1);
   for (let i = 0; i < nums.length; i++) {
      valIndex[nums[i]] = i;
   }
   for (let i = 0; i < operations.length; i++) {
      let index = operations[i][0];
      let val = operations[i][1];
      valIndex[val] = valIndex[index];
      valIndex[index] = -1;
   }
   const res: number[] = [];
   for (let i = 0; i < valIndex.length; i++) {
      if (valIndex[i] !== -1) {
         res[valIndex[i]] = i;
      }
   }
   return res;
}

//6093. Design a Text Editor
//Accepted
class TextEditor {
   cursorPosition: number;
   text: string;
   constructor() {
      this.cursorPosition = 0;
      this.text = "";
   }

   addText(text: string): void {
      this.text = this.text.slice(0, this.cursorPosition) + text + this.text.slice(this.cursorPosition);
      this.cursorPosition += text.length;
   }

   deleteText(k: number): number {
      let _k = Math.min(k, this.cursorPosition);
      this.text = this.text.slice(0, this.cursorPosition - _k) + this.text.slice(this.cursorPosition);
      this.cursorPosition -= _k;
      return _k;
   }

   cursorLeft(k: number): string {
      let _k = Math.min(k, this.cursorPosition);
      this.cursorPosition -= _k;
      return this.text.slice(this.cursorPosition - Math.min(this.cursorPosition, 10), this.cursorPosition);
   }

   cursorRight(k: number): string {
      let _k = Math.min(k, this.text.length - this.cursorPosition);
      this.cursorPosition += _k;
      return this.text.slice(this.cursorPosition - Math.min(this.cursorPosition, 10), this.cursorPosition);
   }
}

/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */
