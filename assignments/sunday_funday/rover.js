const xAxisRover = 0;
const yAxisRover = 0;
const directions = 0; 
const Number = 332331;

// The above input should leave the Mars Rover at 2 2 0

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let reverseOfInstructions = 0;
let remainingInstruction = Number;

while (remainingInstruction > 0) {
    const singleDigit = remainingInstruction % 10;
    remainingInstruction = (remainingInstruction - singleDigit) / 10;  
    reverseOfInstructions = (reverseOfInstructions * 10) + singleDigit;
}

let finalHeading = directions;
let finalRoverX = xAxisRover;
let finalRoverY = yAxisRover;

while (reverseOfInstructions > 0) {

    const currentInstruction = reverseOfInstructions % 10;
    
    if (currentInstruction === 1) {
        finalHeading--;
        if (finalHeading < 0) {
            finalHeading = 3;
        } 
        // finalHeading = (finalHeading + 3) % 4
    } else if (currentInstruction === 2) {
        finalHeading++;
        if (finalHeading > 3) {
            finalHeading = 0;
        } 
        // finalHeading = (finalHeading + 4)
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
    reverseOfInstructions = (reverseOfInstructions - currentInstruction) / 10;
}
console.log(finalRoverX,finalRoverY,finalHeading);