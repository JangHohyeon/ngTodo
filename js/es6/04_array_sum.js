// 응용과제, 아래 배열 3개의 구성요소를 모두 더해서 55가 출력되게 하시오.
// 최대한 간단하게 하시오.
let array1 = [1,2,3];
let array2 = [4,5];
let array3 = [6,7,8,9,10];

let result = [...array1, ...array2, ...array3];
var sum = 0;
result.forEach(item=>sum+=item); // argument 1개면 함수괄호 생략 가능
console.log(sum);
