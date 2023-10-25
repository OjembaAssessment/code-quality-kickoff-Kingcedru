function createPhoneNumber(numbers: number[]): string {
    if(numbers.length < 10 || numbers.length > 10) return 'false'
    const firstThree = `(${numbers.slice(0,3).join('')}) `
    return `${firstThree}${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`
  }
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))//(123) 456-7890