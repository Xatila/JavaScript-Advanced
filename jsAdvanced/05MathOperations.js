function calculate(n1,n2, op){
    let result;
    switch (op) {
        case '+':
            result=n1+n2;
            break;
        case '-':
            result=n1-n2;
            break;
        case '*':
            result=n1*n2;
            break;
        case '/':
            result=n1/n2;
            break;
        case '%':
            result=n1%n2;
            break;
        case '**':
            result=n1**n2;
            break;
    }
    console.log(result);
}
calculate(5, 6, '+');