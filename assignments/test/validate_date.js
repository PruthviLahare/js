const format = 'mm-dd-yyyy';
const date = '01-09-2024';

// Validate the given date against the format string

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let isFormatDateValid = false;
let isLeap = false;
let year = '';
let month = '';
let accessDate = '';

if (date.length === 10) {
    switch (format) {
        case 'yyyy-mm-dd':
            year = +(date[0] + date[1] + date[2] + date[3]);
            month = +(date[5] + date[6]);
            accessDate = +(date[8] + date[9]);
            break;

        case 'mm-dd-yyyy':
            month = +(date[0] + date[1]);
            accessDate = +(date[3] + date[4]);
            year = +(date[6] + date[7] + date[8] + date[9]);
            break;

        case 'dd-mm-yyyy':
            accessDate = +(date[0] + date[1]);
            month = +(date[3] + date[4]);
            year = +(date[6] + date[7] + date[8] + date[9]);
            break;

        default:
            isFormatDateValid = 'invalid';
    }

    const isDivisibleBy400 = (year % 400 === 0);
    const isDivisibleBy4 = (year % 4 === 0);
    const isDivisibleBy100 = (year % 100 === 0);

    if (isDivisibleBy400 || (isDivisibleBy4 && !isDivisibleBy100)) {
        isLeap = true;
    }

    let checkIfValidYear = year > 0 && year < 10000;
    let checkIfMonthValid = month > 0 && month < 13;
    let setFebDate = isLeap ? 29 : 28;
    let maxPossibleNoDays = 31;

    if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (accessDate > 0 && accessDate < 31) {
            isFormatDateValid = true;
        }
    } else if (month === 2) {
        if (accessDate > 0 && accessDate <= setFebDate) {
            isFormatDateValid = true;
        }
    } else if (accessDate > 0 && accessDate <= maxPossibleNoDays) {
        isFormatDateValid = true;
    }

    isFormatDateValid = (checkIfValidYear && checkIfMonthValid) && isFormatDateValid;
}

console.log(isFormatDateValid ? 'valid' : 'invalid');