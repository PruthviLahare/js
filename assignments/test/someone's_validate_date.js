const format1 = 'yyyy-mm-dd';
const format2 = 'mm-dd-yyyy';
const format3 = 'dd-mm-yyyy';
let day = '';
let year = '';
let month = '';

function isFormatValid(format) {
  switch (format) {
    case "dd-mm-yyyy":
      return true;

    case "mm-dd-yyyy":
      return true;

    case "yyyy-mm-dd":
      return true;
  }

  return false;
}

function isDateAccordingToTheFormat(format, date) {
  if (format === "dd-mm-yyyy" && date[2] === "-" && date[5] === "-") {
    return true;
  }

  if (format === "mm-dd-yyyy" && date[2] === "-" && date[5] === "-") {
    return true;
  }

  if (format === "yyyy-mm-dd" && date[4] === "-" && date[7] === "-") {
    return true;
  }
  return false;
}

function getDate(format, date) {
  if (format === format2) {
    day = +(date[3] + date[4]);
    month = +(date[0] + date[1]);
    year = +(date[6] + date[7] + date[8] + date[9]);
  }
  if (format === format1) {
    day = +(date[8] + date[9]);
    month = +(date[5] + date[6]);
    year = +(date[0] + date[1] + date[2] + date[3]);
  }
  if (format === format3) {
    day = +(date[0] + date[1]);
    month = +(date[3] + date[4]);
    year = +(date[6] + date[7] + date[8] + date[9]);
  }
}

function isYearValid(year) {
  return year > 0;
}

function isMonthValid(month) {
  return month > 0 && month <= 12;
}

function isLeap(year) {
  const isDivisibleBy400 = (year % 400 === 0);
  const isDivisibleBy4 = (year % 4 === 0);
  const isDivisibleBy100 = (year % 100 === 0);

  return isDivisibleBy400 || (isDivisibleBy4 && !isDivisibleBy100);
}

function isDayValid(year, month, day) {
  const monthHas30 = month === 4 || month === 6 || month === 9 || month === 11;
  if (month === 2 && isLeap(year)) {
    return day <= 29 && day > 0;
  }

  if (month === 2 && !isLeap(year)) {
    return day < 29 && day > 0;
  }

  if (monthHas30) {
    return day <= 30 && day > 0;
  }

  return day <= 31 && day > 0;
}

function checkingForDDMMYYYY(day, month, year) {
  if (!isYearValid(year)) {
    return 'invalid year';
  }
  if (!isMonthValid(month)) {
    return 'invalid month';
  }
  if (!isDayValid(year, month, day)) {
    return 'invalid day';
  }

  return 'almost valid';
}

function validate(format, date) {
  if (!isFormatValid(format)) {
    return "invalid format";
  }
  if (date.length !== 10) {
    return 'date not according to format'
  }
  if (!isDateAccordingToTheFormat(format, date)) {
    return 'date not according to format';
  }

  day = getDate(format, date);
  const checkingResult = checkingForDDMMYYYY(day, month, year);

  return checkingResult !== "almost valid" ? checkingResult : 'valid'; // change this 
}

function testValidate(format, date, expected) {
  const result = validate(format, date);

  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testAll() {
  testValidate("xx-yy-zzzz", "01-01-2020", "invalid format");
  testValidate("mm=dd=yyyy", "01-01-2020", "invalid format");
  testValidate("mm-dd-yyyy", "01 01 2020", "date not according to format");
  testValidate("mm-dd-yyyy", "01-01-20200", "date not according to format");
  testValidate("mm-dd-yyyy", "01-01-0000", "invalid year");
  testValidate("mm-dd-yyyy", "13-01-0001", "invalid month");
  testValidate("mm-dd-yyyy", "01-60-0001", "invalid day");
  testValidate("mm-dd-yyyy", "02-29-0005", "invalid day");
  testValidate("mm-dd-yyyy", "02-29-0004", "valid");
  testValidate("mm-dd-yyyy", "02-29-0100", "invalid day");
  testValidate("mm-dd-yyyy", "02-29-1900", "invalid day");
  testValidate("mm-dd-yyyy", "02-29-2000", "valid");
  testValidate("mm-dd-yyyy", "04-31-0001", "invalid day");
  testValidate("mm-dd-yyyy", "02-31-0001", "invalid day");
  testValidate("mm-dd-yyyy", "03-31-0001", "valid");
  testValidate("mm-dd-yyyy", "04-30-0001", "valid");
  testValidate("dd-mm-yyyy", "01-01-2020", "valid");
  testValidate("dd-mm-yyyy", "31-01-2020", "valid");
  testValidate("dd-mm-yyyy", "32-01-2020", "invalid day");
  testValidate("dd=mm=yyyy", "01-01-2020", "invalid format");
  testValidate("dd-mm-yyyy", "01 01 2020", "date not according to format");
  testValidate("dd-mm-yyyy", "01-01-20200", "date not according to format");
  testValidate("dd-mm-yyyy", "01-01-0000", "invalid year");
  testValidate("dd-mm-yyyy", "01-01-0000", "invalid year");
  testValidate("dd-mm-yyyy", "01-13-0000", "invalid year");
  testValidate("dd-mm-yyyy", "01-01-6000", "valid");
  testValidate("dd-mm-yyyy", "29-02-0005", "invalid day");
  testValidate("dd-mm-yyyy", "29-02-0004", "valid");
  testValidate("dd-mm-yyyy", "29-02-0100", "invalid day");
  testValidate("dd-mm-yyyy", "29-02-1900", "invalid day");
  testValidate("dd-mm-yyyy", "29-02-2000", "valid");
  testValidate("dd-mm-yyyy", "31-04-0001", "invalid day");
  testValidate("dd-mm-yyyy", "31-02-0001", "invalid day");
  testValidate("dd-mm-yyyy", "31-03-0001", "valid");
  testValidate("dd-mm-yyyy", "30-04-0001", "valid");
  testValidate("yyyy=mm=dd", "2020-01-01", "invalid format");
  testValidate("yyyy-mm-dd", "2020 01 01", "date not according to format");
  testValidate("yyyy-mm-dd", "20200-01-01", "date not according to format");
  testValidate("yyyy-mm-dd", "0000-01-01", "invalid year");
  testValidate("yyyy-mm-dd", "0001-13-01", "invalid month");
  testValidate("yyyy-mm-dd", "0001-01-01", "valid");
  testValidate("yyyy-mm-dd", "0005-02-29", "invalid day");
  testValidate("yyyy-mm-dd", "0004-02-29", "valid");
  testValidate("yyyy-mm-dd", "0100-02-29", "invalid day");
  testValidate("yyyy-mm-dd", "1900-02-29", "invalid day");
  testValidate("yyyy-mm-dd", "2000-02-29", "valid");
  testValidate("yyyy-mm-dd", "0001-04-31", "invalid day");
  testValidate("yyyy-mm-dd", "0001-02-31", "invalid day");
  testValidate("yyyy-mm-dd", "0001-03-31", "valid");
  testValidate("yyyy-mm-dd", "0001-04-30", "valid");
  testValidate("xx-yy-zzzz", "01-01-2020", "invalid format");
  testValidate("mm=dd=yyyy", "01-01-2020", "invalid format");
  testValidate("mm-dd-yyyy", "01 01 2020", "date not according to format");
  testValidate("mm-dd-yyyy", "01-01-20200", "date not according to format");
  testValidate("mm-dd-yyyy", "01-01-0000", "invalid year");
  testValidate("mm-dd-yyyy", "13-01-0001", "invalid month");
  testValidate("mm-dd-yyyy", "01-60-0001", "invalid day");
  testValidate("mm-dd-yyyy", "02-29-0005", "invalid day");
  testValidate("mm-dd-yyyy", "02-29-0004", "valid");
  testValidate("mm-dd-yyyy", "02-29-0100", "invalid day");
  testValidate("mm-dd-yyyy", "02-29-1900", "invalid day");
  testValidate("mm-dd-yyyy", "02-29-2000", "valid");
  testValidate("mm-dd-yyyy", "04-31-0001", "invalid day");
  testValidate("mm-dd-yyyy", "02-31-0001", "invalid day");
  testValidate("mm-dd-yyyy", "03-31-0001", "valid");
  testValidate("mm-dd-yyyy", "04-30-0001", "valid");
  testValidate("dd-mm-yyyy", "01-01-2020", "valid");
  testValidate("dd-mm-yyyy", "31-01-2020", "valid");
  testValidate("dd-mm-yyyy", "32-01-2020", "invalid day");
  testValidate("dd=mm=yyyy", "01-01-2020", "invalid format");
  testValidate("dd-mm-yyyy", "01 01 2020", "date not according to format");
  testValidate("dd-mm-yyyy", "01-01-20200", "date not according to format");
  testValidate("dd-mm-yyyy", "01-01-0000", "invalid year");
  testValidate("dd-mm-yyyy", "01-13-0001", "invalid month");
  testValidate("dd-mm-yyyy", "01-01-6000", "valid");
  testValidate("dd-mm-yyyy", "29-02-0005", "invalid day");
  testValidate("dd-mm-yyyy", "29-02-0004", "valid");
  testValidate("dd-mm-yyyy", "29-02-0100", "invalid day");
  testValidate("dd-mm-yyyy", "29-02-1900", "invalid day");
  testValidate("dd-mm-yyyy", "29-02-2000", "valid");
  testValidate("dd-mm-yyyy", "31-04-0001", "invalid day");
  testValidate("dd-mm-yyyy", "31-02-0001", "invalid day");
  testValidate("dd-mm-yyyy", "31-03-0001", "valid");
  testValidate("dd-mm-yyyy", "30-04-0001", "valid");
  testValidate("yyyy=mm=dd", "2020-01-01", "invalid format");
  testValidate("yyyy-mm-dd", "2020 01 01", "date not according to format");
  testValidate("yyyy-mm-dd", "20200-01-01", "date not according to format");
  testValidate("yyyy-mm-dd", "0000-01-01", "invalid year");
  testValidate("yyyy-mm-dd", "0001-13-01", "invalid month");
  testValidate("yyyy-mm-dd", "0001-01-01", "valid");
  testValidate("yyyy-mm-dd", "0005-02-29", "invalid day");
  testValidate("yyyy-mm-dd", "0004-02-29", "valid");
  testValidate("yyyy-mm-dd", "0100-02-29", "invalid day");
  testValidate("yyyy-mm-dd", "1900-02-29", "invalid day");
  testValidate("yyyy-mm-dd", "2000-02-29", "valid");
  testValidate("yyyy-mm-dd", "0001-04-31", "invalid day");
  testValidate("yyyy-mm-dd", "0001-02-31", "invalid day");
  testValidate("yyyy-mm-dd", "0001-03-31", "valid");
  testValidate("yyyy-mm-dd", "0001-04-30", "valid");
}

testAll();