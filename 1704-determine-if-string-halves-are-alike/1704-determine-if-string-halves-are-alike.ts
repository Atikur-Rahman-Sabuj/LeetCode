function halvesAreAlike(s: string): boolean {
    let fh = 0, sh = 0;
    const VOWELS = 'aeiou';
    for(let i = 0 ; i < s.length/2 ; i++){
        if(VOWELS.includes(s[i].toLocaleLowerCase())) fh++;
    }
    for(let i = s.length/2 ; i < s.length ; i++){
        if(VOWELS.includes(s[i].toLocaleLowerCase())) sh++;
    }
    return fh === sh;
};