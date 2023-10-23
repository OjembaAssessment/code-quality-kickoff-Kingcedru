// Format any integer provided into a string with "," (commas) in the correct places.

const numberFormat = (number) =>{
    number = number.toString().split('')
    let result = []
    let count = 0;
    for(let i = number.length - 1; i >= 0;i--){
      if(count === 3){
        result.push(',',number[i])
        count = 1
        i -= 1
      }
      if(count < 3){
        result.push(number[i])
      }
      
      count += 1
    }
    
    result = result.reverse().join("")
    //Checking whether the string start with a - sign and a commam
    return result[0] == '-' && result[1] == ',' ?  `-${result.slice(2,)}`: result

    // Another method
    // return number.toLocaleString();
  };
console.log(numberFormat(100000))
console.log(numberFormat(5678545))
console.log(numberFormat(-420902))
console.log(numberFormat(0))