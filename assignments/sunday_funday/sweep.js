// Do not rename minefield, use it as input for your program.
const minefield = "-*--\n---*\n*---\n-*--";

// Clear the mines one by one, always choosing the mine closest to the top left hand corner
// See the README for more details
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let LengthOfLine = 0;
let NoOfLines = 0;
const BOMB = '*';
let distance = 0;

for (let index = 0; index < minefield.length; index++) {
    if (minefield[index] !== '\n') {
        LengthOfLine += 1;
    } else {
        NoOfLines += 1;
    }  
}

NoOfLines = NoOfLines + 1;
LengthOfLine = LengthOfLine / NoOfLines;
console.log("NoOfLines :",NoOfLines);
console.log("LengthOfLine :",LengthOfLine,"\n");

for (let horizonal = 0; horizonal < LengthOfLine; horizonal++) {
    console.log("horizontal :",horizonal);

    for (let vertical = 0; vertical < NoOfLines; vertical++) {
        console.log("vertical : ",vertical);

       if (minefield[horizonal][vertical] === BOMB) {
            distance = horizonal + vertical;
            // console.log(horizonal,vertical)
            console.log(minefield[horizonal][vertical]);
            
       }   
    }    
}

console.log(distance);