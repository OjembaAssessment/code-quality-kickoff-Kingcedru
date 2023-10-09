export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  const sizeOfTen = password.match(/^\w{10}$/)
  const onlyDigits = password.match(/^\d+$/)
  const onlyCharacters = password.match(/^[a-z]+$/i)
  const onlyUpperCase = password.match(/[A-Z]/)
  const onlyLowerCase = password.match(/[a-z]/)
  
let onlyFourDifferentChar = password.match(/(\w)/g)
onlyFourDifferentChar =  [...new Set(onlyFourDifferentChar)].length
const all = password.match(/[a-z 0-9]/gi)
// const happyCode = password.match(/[\w]/)
if(onlyDigits || onlyCharacters || onlyUpperCase || onlyLowerCase) return false
if(onlyFourDifferentChar >= 4 && sizeOfTen && all) return true

return condit ? false : true
if(onlyFourDifferentChar >= 4) return true
if(onlyFourDifferentChar < 4) return false

  // if(!sizeOfTen || onlyDigits  || onlyUpperCase || onlyLowerCase){
  //   return false;
  // }
  
  

  // * * * YOUR CODE GOES IN HERE ... * * *
  /*
   * if (password is not exactly 10 digits or characters...) {
   *   return ...;
   * }
   *
   * if (is not composed by digits and numbers) {
   *   return ...;
   * }
   */
  
  // return true;
}
