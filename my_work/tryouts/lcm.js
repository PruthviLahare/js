let a = 1;
let b = 1;

let minNumber = a;
let maxNumber = b;

if(minNumber > maxNumber) {
    minNumber = b;
    maxNumber = a; 
}

let CommonMultiple = minNumber;

if(minNumber !== 0) {
    while (CommonMultiple % maxNumber !== 0) {
        CommonMultiple = CommonMultiple + minNumber; 
    }
    console.log(CommonMultiple);
}