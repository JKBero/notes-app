var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('.');
    }
  }
};

var assert = {
  isFalse: function(assertionToCheck) {
    if (assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsy");
    } else {
      console.log('.');
    }
  }
};

var assert = {
  eq: function(expected, actual) {
    if (expected !== actual) {
      throw new Error("Assertion failed: expected " + expected + ", but returned " + actual);
    } else {
      console.log('.');
    }
  }
};
