const CELSIUS = 'C';
const KELVIN = 'K';
const FAHRENHEIT = 'F';

function convertFromKelvin(value, to) {
  const valueInCelsius = value - 273.15;
  const valueInFahrenheit = (value - 273.15) * (9 / 5) + 32;

  return to === CELSIUS ? valueInCelsius : valueInFahrenheit;
}

function convertFromCelsius(value, to) {
  const valueInKelvin = value + 273.15;

  return to === KELVIN ? valueInKelvin : convertFromKelvin(valueInKelvin, to);
}

function convertFromFahrenheit(value, to) {
  const valInCelsius = (value - 32) * (5 / 9);

  return to === CELSIUS ? valInCelsius : convertFromCelsius(valInCelsius, to);
}

function isUnitValid(unit) {
  const UNITS = 'FKC';

  for (let index = 0; index < UNITS.length; index++) {
    if (UNITS[index] === unit) {
      return true;
    }
  }

  return false;
}

function areValidUnits(from, to) {
  return isUnitValid(from) && isUnitValid(to);
}

function areValidArguments(from, to, value) {
  return areValidUnits(from, to);
}

function convert(from, to, value) {
  if (!areValidArguments(from, to, value)) {
    return NaN;
  }

  switch (from) {
    case to:
      return +value;

    case KELVIN:
      return convertFromKelvin(value, to);

    case CELSIUS:
      return convertFromCelsius(value, to);

    case FAHRENHEIT:
      return convertFromFahrenheit(value, to);
  }
}

function expectationSegment(actual, expected) {
  const actualSegment = "Actual:   " + actual;
  const expectedSegment = "Expected: " + expected;

  return expectedSegment + "\n" + actualSegment;
}

function assembleMessage(from, to, value, expected, actual) {
  const message = value + "°" + from + " -> " + to;

  return message + "\n" + expectationSegment(actual, expected) + "\n";
}

function getMark(actual, expected) {
  return expected + '' === actual + '' ? '✅' : '❌';
}

function testTempConvert(from, to, value, expected) {
  const actual = convert(from, to, value);
  const mark = getMark(actual, expected);
  const message = assembleMessage(from, to, value, expected, actual);

  console.log(mark, message);
}

function testForTemperatureConv() {
  // testTempConvert(KELVIN, KELVIN, 0, 0);
  // testTempConvert(FAHRENHEIT, KELVIN, -40, 233.15);
  // testTempConvert(KELVIN, FAHRENHEIT, 37, -393.07);
  // testTempConvert(FAHRENHEIT, KELVIN, 98.6, 310.15);
  // testTempConvert(KELVIN, FAHRENHEIT, 100, -279.66999999999996);
  // testTempConvert(KELVIN, KELVIN, 0, 0);
  // testTempConvert('D', 'D', 0, NaN);
  // testTempConvert(FAHRENHEIT, 'D', 0, NaN);
  // testTempConvert(FAHRENHEIT, 'c', 0, NaN);
  // testTempConvert(KELVIN, FAHRENHEIT, '100', -279.67);
  // testTempConvert(KELVIN, FAHRENHEIT, 'sky', NaN);
  // testTempConvert(KELVIN, FAHRENHEIT, NaN, NaN);
  // testTempConvert(KELVIN, KELVIN, 100, 100);
  // testTempConvert(KELVIN, KELVIN, 'a', NaN);

  // testTempConvert('C', 'K', 100, 373.15);
  // testTempConvert('C', 'K', '100', 373.15);
  // testTempConvert('C', 'C', 100, 100);
  // testTempConvert('C', 'C', '100', 100);
  // testTempConvert('C', 'F', -40, -40);
  // testTempConvert('C', 'F', 26, 78.80000000000001);
  testTempConvert('C', 'F', '37', 98.6);
}

testForTemperatureConv();