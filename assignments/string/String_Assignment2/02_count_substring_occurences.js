// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "jjjjjjjjjj";
const subString = "jj";
// Print the count of occurences of a substring in the given string
// If string = "duplicate substring statement" and subString = "ate", then print 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// string          subString             output
// abc               bc                    1
// ' '              ' '                   1
// '  '             ' '                   2
//'xnsj'            'z'                   0
//' abc '           'a '                  0
//'bcus'            ''                    0
//'jjjjjjjjjj'      'jj'                  9

// let subStringIndex = 0; 
// let countSubOccur = 0;

// for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {

//     const isCharEqual = string[stringIndex] === subString[subStringIndex];
//     console.log(stringIndex,subStringIndex);

//     if (isCharEqual) {
//         subStringIndex++; 
//     }  
    
//     if ((subStringIndex === subString.length) && subString.length != 0) {
//         countSubOccur += 1;
//         subStringIndex = 0;
//     }    
// }

// console.log(countSubOccur);


let countSubOccur = 0;
let runUntil = 0;
let stringIndex = 0;

while (runUntil < string.length) {
    let newString = '';
    let stringCpy = '';

    for (stringIndex = runUntil; stringIndex < string.length; stringIndex++) {
        stringCpy += string[stringIndex];
    }
    
    for (let index = 0; index < subString.length; index++) {
         newString += stringCpy[index];  
        
        if (newString === subString) {
            countSubOccur += 1;
        }
    }
    runUntil++;
    stringIndex = runUntil;
}

console.log(countSubOccur);