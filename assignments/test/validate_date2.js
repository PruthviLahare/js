const YMD = 'yyyy-mm-dd';
const MDY = 'mm-dd-yyyy';
const DMY = 'dd-mm-yyyy';
//why not INVALID_DATE_FORMATMSG?
const INVALID_DATE_FORMATMSG = 'date not according to format';
const HYPHEN = '-';
//combine the function
function isSpacePresent(date) {
  for (let index = 0; index < date.length; index++) {
    if (date[index] === ' ') {
      return true;
    }
  }

  return false;
}

function isHyphenInPosition(format, date) {
  if (format === MDY || format === DMY) {
    return date[2] === HYPHEN && date[5] === HYPHEN;
  }

  return date[4] === HYPHEN && date[7] === HYPHEN;
}

function isDateFormatValid(format, date) {
  if (isSpacePresent(date)) {
    return INVALID_DATE_FORMATMSG;
  }

  if (!isHyphenInPosition(format, date)) {
    return INVALID_DATE_FORMATMSG;
  }
}

function isYearValid(year) {
  return year > 0;
}

function isLeap(year) {
  const isDivisibleBy400 = (year % 400 === 0);
  const isDivisibleBy4 = (year % 4 === 0);
  const isDivisibleBy100 = (year % 100 === 0);

  return isDivisibleBy400 || (isDivisibleBy4 && !isDivisibleBy100);
}

function getPossibleNoOfDays(month, year) {
  if (month === 2) {
    return isLeap(year) ? 29 : 28;
  }

  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  }

  return 31;
}

function isDateValid(day, month, year) {
  return day > 0 && day <= getPossibleNoOfDays(month, year); 
  //numberOfDaysInMonth
  //max no of days in a month
}

function getDay(format, date) {
  if (format === "dd-mm-yyyy") {
    return date[0] + date[1];
  }

  if (format === "mm-dd-yyyy") {
    return date[3] + date[4];
  }

  return date[8] + date[9];
}

function getMonth(format, date) {
  if (format === "dd-mm-yyyy") {
    return date[3] + date[4];
  }

  if (format === "mm-dd-yyyy") {
    return date[0] + date[1];
  }

  return date[5] + date[6];
}

function getYear(format, date) {
  if (format === "yyyy-mm-dd") {
    return date[0] + date[1] + date[2] + date[3];
  }

  return date[6] + date[7] + date[8] + date[9];
}

function isMonthValid(month) {
  return month > 0 && month <= 12;
}

// create a function

function validate(format, date) {
  const validFormat = format === YMD || format === MDY || format === DMY;

  if (!validFormat) {
    return 'invalid format';
  }

  if (date.length !== 10) {
    return INVALID_DATE_FORMATMSG;
  }

  if (isDateFormatValid(format, date)) {
    return INVALID_DATE_FORMATMSG;
  }

  const day = +getDay(format, date);
  const year = +getYear(format, date);
  const month = +getMonth(format, date);

  if (!isYearValid(year)) {
    return 'invalid year';
  }
  if (!isMonthValid(month)) {
    return 'invalid month';
  }
  if (!isDateValid(day, month, year)) {
    return 'invalid day';
  }

  return 'valid';
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testLeapYear() {
  testValidate("mm-dd-yyyy", "02-29-0005", "invalid day");
  testValidate("mm-dd-yyyy", "02-29-0004", "valid");
  testValidate("mm-dd-yyyy", "02-29-0100", "invalid day");
  testValidate("mm-dd-yyyy", "02-29-1900", "invalid day");
  testValidate("mm-dd-yyyy", "02-29-2000", "valid");
}

function testInvalidFormat() {
  testValidate("xx-yy-zzzz", "01-01-2020", "invalid format");
  testValidate("mm-dd-yyy,", "01-01-2020", "invalid format");
  testValidate("mm=dd=yyyy", "01-01-2020", "invalid format");
  testValidate("dd=mm=yyyy", "01-01-2020", "invalid format");
  testValidate("yyyy=mm=dd", "2020-01-01", "invalid format");
}

function testInvalidDay() {
  testValidate("mm-dd-yyyy", "01-60-0001", "invalid day");
  testValidate("mm-dd-yyyy", "04-31-0001", "invalid day");
  testValidate("mm-dd-yyyy", "02-31-0001", "invalid day");
  testValidate("dd-mm-yyyy", "32-01-2020", "invalid day");
  testValidate("yyyy-mm-dd", "0001-04-31", "invalid day");
  testValidate("dd-mm-yyyy", "29-02-0100", "invalid day");
  testValidate("dd-mm-yyyy", "29-02-1900", "invalid day");
  testValidate("dd-mm-yyyy", "31-04-0001", "invalid day");
  testValidate("dd-mm-yyyy", "31-02-0001", "invalid day");
  testValidate("yyyy-mm-dd", "0001-02-31", "invalid day");
  testValidate("yyyy-mm-dd", "0005-02-29", "invalid day");
  testValidate("yyyy-mm-dd", "0100-02-29", "invalid day");
  testValidate("yyyy-mm-dd", "1900-02-29", "invalid day");
  testValidate("dd-mm-yyyy", "29-02-0005", "invalid day");
}

function testInvalidMonth() {
  testValidate("yyyy-mm-dd", "0001-13-01", "invalid month");
  testValidate("mm-dd-yyyy", "13-01-0001", "invalid month");
  testValidate("dd-mm-yyyy", "01-13-0001", "invalid month");
}

function testInvalidYear() {
  testValidate("mm-dd-yyyy", "01-01-0000", "invalid year");
  testValidate("dd-mm-yyyy", "01-01-0000", "invalid year");
  testValidate("yyyy-mm-dd", "0000-01-01", "invalid year");
  testValidate("dd-mm-yyyy", "01-13-0000", "invalid year");
}

function testValidDates() {
  testValidate("mm-dd-yyyy", "03-31-0001", "valid");
  testValidate("mm-dd-yyyy", "04-30-0001", "valid");
  testValidate("dd-mm-yyyy", "01-01-2020", "valid");
  testValidate("dd-mm-yyyy", "31-01-2020", "valid");
  testValidate("dd-mm-yyyy", "01-01-6000", "valid");
  testValidate("dd-mm-yyyy", "29-02-0004", "valid");
  testValidate("dd-mm-yyyy", "29-02-2000", "valid");
  testValidate("dd-mm-yyyy", "31-03-0001", "valid");
  testValidate("dd-mm-yyyy", "30-04-0001", "valid");
  testValidate("yyyy-mm-dd", "0001-01-01", "valid");
  testValidate("yyyy-mm-dd", "0004-02-29", "valid");
  testValidate("yyyy-mm-dd", "2000-02-29", "valid");
  testValidate("yyyy-mm-dd", "0001-03-31", "valid");
  testValidate("yyyy-mm-dd", "0001-04-30", "valid");
}

function testIncorrectDateFormat() {
  // testValidate("mm-dd-yyyy", "01-01-202*", "date not according to format");
  testValidate("mm-dd-yyyy", "01-01-202 ", "date not according to format");
  testValidate("mm-dd-yyyy", "01-01-20200", "date not according to format");
  testValidate("dd-mm-yyyy", "01 01 2020", "date not according to format");
  testValidate("dd-mm-yyyy", "01-01-20200", "date not according to format");
  testValidate("yyyy-mm-dd", "2020 01 01", "date not according to format");
  testValidate("yyyy-mm-dd", "20200-01-01", "date not according to format");
}

function testAll() {
  testLeapYear();
  testInvalidFormat();
  testInvalidDay();
  testInvalidMonth();
  testInvalidYear();
  testIncorrectDateFormat();
  testValidDates();
}

testAll();