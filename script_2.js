function factorial(number){
    var result = number;
    while(number > 1){
        number--;
        result *= number;
    }
    return result;
}

console.log(factorial(4));

console.log(factorial(7));

console.log(factorial(13));