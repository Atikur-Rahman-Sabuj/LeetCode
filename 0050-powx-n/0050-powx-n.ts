function myPow(x: number, n: number): number {
  if(n==0)      return 1            // base case  
  else if(n==1) return x            // base case 
  else if(n==-1)  return 1/x
  else if(n%2==0){
  		let t=myPow(x, n/2);
      return t*t
  }
  else if(n%2!=0){
  		return x*myPow(x,n-1)
  }
};