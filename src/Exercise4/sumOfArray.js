function addingArray(arr){
    return arr.flat(Infinity).reduce((sum,occurs)=> sum + occurs)
 }
 addingArray([1,2,[3,4],[5,[[[[[[6]]]]]],6]])