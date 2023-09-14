export const findAndAddSpace = (string) => { 
  if (string !== undefined) {
    const words = string.split(",");

    for (let i = 0; i < words.length - 1; i++) {
      if (words[i + 1].charAt(0) !== " ") {
        words[i + 1] = " " + words[i + 1]
      }
    }
    const modifiedString = words.join(",");
    return modifiedString;
  }
};



