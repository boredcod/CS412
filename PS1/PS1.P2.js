evaluate = (s) =>{
    let pointer = 0;
    let firstNum = "";
    let operator = ""
    let secondNum = "";
    while (pointer < s.length){
        if (!isNaN(s[pointer])){
            firstNum += s[pointer]
        }
        else {
            break
        }
        pointer++
    }
    operator = s[pointer]
    pointer++
    while (pointer < s.length){
        secondNum += s[pointer];
        pointer++;
    }
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
    let res = 0;
    switch (operator) {
        case '+':
            res = firstNum + secondNum;
            break;
        case '-':
            res = firstNum - secondNum;
            break;
        case '*':
            res = firstNum * secondNum;
            break;
        case '^':
            res = firstNum ** secondNum;
            break;
        case '*':
            res = firstNum / secondNum;
            break;
        case '%':
            res = firstNum % secondNum;
            break;
        default:
            break;

    }
    return res
}
const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator}`)