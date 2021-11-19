function factorial(){
    let number =  window.prompt ("quel nombre choisis-tu ?")
    var result = number;
    while(number > 1){
        number--;
        result *= number;
    }
    return result;
}

console.log(factorial());