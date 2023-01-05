//Function that prints out a message in the console but with a simpler syntax
export function log(message: string) {
  return console.log(message);
}

//Function that formats text in 3 cases: lowercase, uppercase and titlecase
export function formatText(string: string, option: string) {
  let formattedOption = option.toLowerCase().trim();

  switch (formattedOption) {
    case "lowercase": {
      return string.toLowerCase();
    }

    case "uppercase": {
      return string.toUpperCase();
    }

    case "titlecase": {
      let stringArray = string.split(" ");
      for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] =
          stringArray[i].substring(0, 1).toUpperCase() +
          stringArray[i].slice(1).toLowerCase();
      }
      stringArray = stringArray.concat();
      return stringArray.toString();
    }

    default: {
      throw new Error(
        "Formatting text error: unknown option passed in argument"
      );
    }
  }
}

//Funtion that replaces letters with accents by their "non-accented" counter-part
//ex: "crème brûlée" → "creme brulee"
export function normalizeString(string: string) {
  if (typeof string !== "string") {
    log("Value passed in argument is not a string !");
    return;
  }
  return string
    .normalize("NFD") // returns the unicode NORMALIZATION FORM of the string using a canonical DECOMPOSITION (NFD).
    .replace(/[\u0300-\u036f]/g, "");
}

//Split a string into an array separating each word with an uppercase on it
//ex: "testColor" → ["test","Color"] → ["test", "color"] → "test-color"
export function splitOnUpperCase(string: string): string {
  let newString: string[] = string.split(/(?=[A-Z])/);

  for (let i = 0; i < newString.length; i++) {
    newString[i] = formatText(newString[i], "lowercase");
  }

  let formattedString = newString.reduce((accumulated, currentValue) => {
    return accumulated + "-" + currentValue;
  });

  return formattedString;
}
