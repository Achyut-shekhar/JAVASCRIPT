const vowels = (str) => {
  //for of loop is used for string and it return the character of string one by one
  for (const char of str) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      console.log(`vowels in the string is ${char}`);
    }
  }
};

str = prompt("input the string");
vowels(str);
