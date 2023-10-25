
function reverseVowels(str) {
    const vowels = ['a','e','i','o','u']
    str.split(' ').join(',').split('')
    const onlyValues = str.split('').filter((item)=>{
      if(vowels.includes((item.toUpperCase()) && (item.toLowerCase()))){
        return item
      }
    }).reverse()
  
    const nonVowelsNumbers = str.split(' ').join(',').split('').map((item,index)=> vowels.includes((item.toUpperCase()) && (item.toLowerCase()))?index:item)
  
    let i = 0
    let t = -1
    let reversedVowels = []
    while (i < nonVowelsNumbers.length){
      if(typeof(nonVowelsNumbers[i])== 'number'){
        reversedVowels.push(onlyValues[t+1])
       t+=1
      }
      else{
        reversedVowels.push(nonVowelsNumbers[i])
      }
      i+= 1
      }
    return reversedVowels.join('').split(',').join(' ')
  }
  reverseVowels("Hello!")//"Holle!"
  reverseVowels("Tomatoes")// "Temotaos"
  reverseVowels("Reverse Vowels In A String")//"RivArsI Vewols en e Streng"