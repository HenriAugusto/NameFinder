function compareWithMediumConfidence(needle, haystack){
    var found = false;
    var name = needle.split(" ")[0];
    var needleSurnames = needle.split(" ").slice(1);
    console.log("--MEDIUM CONFIDENCE--");
    console.log("DaCapostudent = "+needle);
    console.log("   VS Haystack = "+haystack);

    needleSurnames.forEach( (surname) => {
        var re = getRegexToFindASingleSurName( name, surname )+"( |$)";
        var matches = haystack.match(re, "i");
        found = found || matches != null;
        console.log("   regex = "+re);
        if(matches != null){
            console.log("match! = "+haystack);
            console.log("    matches = "+matches);
        }
    });

    if (!found) {
        console.log("no matches for any surname");
    }
    console.log("----------------");
    return found;
}

function getRegexToFindASingleSurName(name, surname){
    return "^"+name+" (\\w+\\.? )*"+getSurnameWithAbreviations(surname);
}