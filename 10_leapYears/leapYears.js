const leapYears = function(year) {
    if (year % 400 === 0) {
    return true;            // divisible by 400 → leap year
  } else if (year % 100 === 0) {
    return false;           // divisible by 100 (but not 400) → NOT leap year
  } else if (year % 4 === 0) {
    return true;            // divisible by 4 → leap year
  } else {
    return false;           // otherwise → NOT leap year
  }
};

// Do not edit below this line
module.exports = leapYears;
