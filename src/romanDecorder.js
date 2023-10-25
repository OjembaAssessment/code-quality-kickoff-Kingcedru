function solution(roman) {
  const romanNumerous = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const romanValues = roman
    .split("")
    .map((items) => (items in romanNumerous ? romanNumerous[items] : 0));
  let sum = 0;
  for (let x = 0; x < romanValues.length; x++) {
    if (romanValues[x] < romanValues[x + 1]) {
      sum -= romanValues[x];
    } else {
      sum += romanValues[x];
    }
  }
  return sum;
}

solution("MCCXIX");
