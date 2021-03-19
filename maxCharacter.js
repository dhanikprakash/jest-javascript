function maxCharactor(str){
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').map( (letter) => {
        charMap[letter] = charMap[letter] ? charMap[letter] + 1 : 1;
    } );

    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char]
             maxChar = char;
        }
    }

    return maxNum;
}

module.exports = maxCharactor;