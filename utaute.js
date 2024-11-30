const array = [{ good }, null, { great }, undefined];
const truthyArray = array.filter(Boolean); // truthyArray = [{ good }, { great }]
