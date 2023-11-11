


function outer(){
    var a = 0
    
    return function inner(){
        a++;
    }

}
console.log(outer());
