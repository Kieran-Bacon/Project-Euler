function isPalindrome(seq, index){
    seq = seq.toString()
    if(index==null){index = 0;}
    if(index>seq.length/2){return true;}
    return seq[index] == seq[seq.length-1-index] & isPalindrome(seq,index+=1);
}

function palindromeProduct(start, end){

    var values = [0,0];
    var product = 0;

    for(var i=start; i<end;i++){
        for(var j=i; j<end;j++){
            if(i*j>product & isPalindrome(i*j)){
                values[0] = i; values[1] = j;
                product = i*j;
            }
        }
    }

    return values
}

//Check
console.log(palindromeProduct(10,100));

//Task
console.log(palindromeProduct(100,1000));