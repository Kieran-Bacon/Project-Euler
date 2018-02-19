function sumMultipleRange(start, end, targets){
    var output = 0;

    for(var i = start; i < end; i++){
        for(var j=0; j<targets.length; j++){
            if(i%targets[j] == 0){
                output += i
                break;
            }
        }
    }

    return output;
}
// Check
console.log(sumMultipleRange(0,10,[3,5]))

// Problem
console.log(sumMultipleRange(0,1000,[3,5]))