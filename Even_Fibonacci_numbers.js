function sumEvenFib(limit){

    var output = 0;
    var queue = [1,2];

    while(true){
        let nextValue = queue[0] + queue[1];
        if(nextValue>limit){
            break;
        }

        if(nextValue%2 == 0){
            output += nextValue;
        }

        queue.push(nextValue);
        queue.shift();
    }

    return output;
}

// Problem
console.log(sumEvenFib(4000000));