function setup(){
    $("#InputNames")[0].addEventListener("input", searchNames);
    $("#InputList")[0].addEventListener("input", searchNames);
}

function searchNames(){
    $("#results")[0].innerHTML = "";
    var haystack = $("#InputList")[0].value;
    var haystackLines = haystack.split("\n");

    var needleNames = $("#InputNames")[0].value;
    var needleNameLines = needleNames.split("\n");

    needleNameLines.forEach( (needleLine, i) => {
        haystackLines.forEach( (haystackLine, j) => {

            needleLinePrepared = removeAccents(needleLine).toLowerCase();
            haystackLinePrepared = removeAccents(haystackLine).toLowerCase();
            
            if( compareExact(needleLinePrepared, haystackLinePrepared) ){
                addFoundName(needleLine,haystackLine,"EXACT");
            } else if( compareWithGoodConfidence(needleLinePrepared, haystackLinePrepared) ){
                addFoundName(needleLine,haystackLine,"GOOD");
            } else if( compareWithMediumConfidence(needleLinePrepared, haystackLinePrepared) ){
                addFoundName(needleLine,haystackLine,"MEDIUM");
            }

       });
    });
}

function compareExact(needle, haystack){
    return needle === haystack;
}

function addFoundName(needle, haystack, confidence){
    var result = document.createElement("div");
        result.classList.add("result-div");
    var arrow = document.createElement("span");
        arrow.innerHTML = " → ";
    var needleEl = document.createElement("span");
        needleEl.innerHTML = needle;
        needleEl.classList.add("result-needle");
        needleEl.classList.add("result-component");
    var haystackEl = document.createElement("span");
        haystackEl.innerHTML = haystack;
        haystackEl.classList.add("result-haystack");
        haystackEl.classList.add("result-component");
    var confidenceEl = document.createElement("span");
        confidenceEl.innerHTML = confidence;
        confidenceEl.classList.add("result-confidence");
        confidenceEl.classList.add("result-component");
        confidenceEl.classList.add( confidence.toLowerCase() );

    result.appendChild(needleEl);
        result.appendChild(arrow);
    result.appendChild(haystackEl);
        result.appendChild(arrow.cloneNode(true));
    result.appendChild(confidenceEl);

    $("#results")[0].appendChild(result);
}

var currDemo = 1;
var nDemos = 3;

function test(){
    console.log("testando...");
    currDemo

    var noCacheHeader = new Headers();
        noCacheHeader.append('pragma', 'no-cache');
        noCacheHeader.append('cache-control', 'no-cache');

    var initNoCache = {
        method: 'GET',
        headers: noCacheHeader,
    };


    fetch('demos/needle'+currDemo+'.txt', initNoCache)
        .then(response => response.text())
        .then(text => $("#InputNames")[0].value = text );
    fetch('demos/haystack'+currDemo+'.txt', initNoCache)
        .then(response => response.text())
        .then(text => $("#InputList")[0].value = text )
        .then( searchNames );
    currDemo++;
    currDemo = currDemo > nDemos ? 1 : currDemo;

}
