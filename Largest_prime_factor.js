function primeFactors(number){

    var factor = [1];
    for(var i=2; i<number/factor[factor.length-1]; i++){
        let broken = false;
        for(var j=2;j<i/j+1;j++){
            if(i%j==0){
                broken = true;
                break;
            }
        }
        if(!broken & number%i == 0){
            factor.push(i);
        }
    }

    return factor;
}

// check
console.log(primeFactors(13195));

// task
console.log(primeFactors(600851475143));