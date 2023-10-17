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

  
  //Checking if the length of the password is equal to 10
  if(password.length !== 10) return false

  // //Checking if password only consists of digits
  if(/^\d+$/.test(password)) return false

  //Checking if password contains only characters
  if(/^[a-z]+$/i.test(password)) return false

  // Checking for special characters
  if(/[^a-zA-Z0-9]/.test(password)) return false

  //Checking if password contains only Upper or Lower case characters
  if(/^[a-z?0-9]+$/g.test(password)) return false
  if(/^[A-Z?0-9]+$/g.test(password)) return false

  //Checking if password is in descing or ascending
  if(/(012|123|234|345|456|567|678|789|987|876|765|654|543|432|321)/.test(password))return false


  //Checking if the forbidden password was not given
  if(forbiddenPasswords.includes(password)) return false

 //Checking if a password doesn't contains four different character/digits
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
