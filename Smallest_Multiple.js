function Range(start, end){
    var output = [];
    for(var i=start;i<end;i++){
        output.push(i);
    }
    return output
}

function smallestMultiple(range){

    var upperlimit = 1;
    for(var e=0;e<range.length;e++){
        upperlimit *= range[e];
    }

    for(var i=1; i<upperlimit; i++){
        let broken = false;
        for(var j=0; j<range.length;j++){
            if(i%range[j]!=0){
                broken=true;
                break;
            }
        }

        if(!broken){return i}
    }

    return upperlimit;
}

//Check
console.log(smallestMultiple(Range(1,11)));

//Task
console.log(smallestMultiple(Range(1,21)));