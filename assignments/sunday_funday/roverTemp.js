const xAxisRover = 0;
const yAxisRover = 0;
const directions = 0; 
const Number = 323132313211;

// The above input should leave the Mars Rover at 2 2 0

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let exponentOf10 = 1;
let numberOfDigit = 1;

while (exponentOf10 < Number) {
    numberOfDigit += 1;
    exponentOf10 = 10 ** numberOfDigit; 
}

let finalHeading = directions;
let finalRoverX = xAxisRover;
let finalRoverY = yAxisRover;
let remainingInstruction = Number;

while (numberOfDigit > 0) {
    const lastInstruction = remainingInstruction;
    exponentOf10 = exponentOf10 / 10;
    remainingInstruction = Number % exponentOf10;
    
    const currentInstruction = (lastInstruction - remainingInstruction) / exponentOf10;
    
    if (currentInstruction === 1) {
        finalHeading--;
        if (finalHeading < 0) {
            finalHeading = 3;
        } 
    } else if (currentInstruction === 2) {
        finalHeading++;
        if (finalHeading > 3) {
            finalHeading = 0;
        } 
    } else if (currentInstruction === 3) {
        let offsetX = 0;
        let offsetY = 0;

        switch (finalHeading) {
            case 0:
            offsetY = 1;
            break;

            case 1:
            offsetX = 1;
            break;

            case 2:
            offsetY = -1;
            break;

            case 3:
            offsetX = -1;  
            break;  
        }

        finalRoverX += offsetX;
        finalRoverY += offsetY;
    }
    numberOfDigit -= 1;
}
console.log(finalRoverX , finalRoverY , finalHeading);