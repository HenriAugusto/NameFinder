function compareWithGoodConfidence(needle, haystack){
    var re = getGoodConfidenceNameRegex( needle.trim() );
    var matches = haystack.match(re,"i");

    console.log("--GOOD CONFIDENCE--");
    console.log("DaCapostudent = "+needle+"        "+re);
    console.log("   VS Haystack = "+haystack);
    if(matches != null){
        matches.forEach( (match) => {
            console.log("   match = "+match);
        });
    } else {
        console.log("   no matches");
    }
    console.log("----------------");
    return matches != null;
}

function getGoodConfidenceNameRegex(fullName){
    var rExp = "";
    var names = fullName.split(" ");

    names.forEach((name, j) => {
        if( j == 0 ){
            rExp += "^"+name+" ";
        } else if (j != names.length-1){
            rExp += getSurnameWithAbreviations(name, true);
        } else {
            rExp += getSurnameWithAbreviations(name, false)+"$";
        }
    });
    return rExp;
}
