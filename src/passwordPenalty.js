/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 *  @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = '') {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if(!password) return 0
  if (typeof password !== "string") password = String(password);
  
  const regex = password.match(/(\w)\1+/g)
  if(!regex)return 0
  const pointArray = regex.map(elt=>{
    if(elt.length > 2){
        return elt = 2
    }
    return elt = 1
})
const sumOfPoints = pointArray.reduce((first,second)=> first + second,0)
return sumOfPoints
}

