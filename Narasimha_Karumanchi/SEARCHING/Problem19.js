/*roblem-19 Find the two repeating elements in a given array: Given an array with size,
all elements of the array are in range 1 to n and also all elements occur only once except
two numbers which occur twice. Find those two repeating numbers. For example: if the
array is 4,2,4,5,2,3,1 with size = 7 and n = 5. This input has n + 2 = 7 elements with all
elements occurring once except 2 and 4 which occur twice. So the output should be 4 2.*/

function printReapeatedElements(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]) console.log(arr[i])
        }
    }
}
printReapeatedElements([4,2,4,5,2,3,1])