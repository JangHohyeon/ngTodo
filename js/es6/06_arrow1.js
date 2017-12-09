/*let circleArea = function(pi, r) {
    let area = pi * r * r;
    return area;
};*/
// 위의 문장을 한줄로 작성하시오.
let circleArea = (pi, r) => pi * r * r;
/*
 * 인자가 하나면 괄호 생략 가능
 * 중괄호에 문장이 하나면 중괄호 생략가능
 * expression일 경우에 return 문도 생략 가능
 */


let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"
