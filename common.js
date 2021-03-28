function getSurnameWithAbreviations(str,spaceAfter) {
    str = str.replace(".","");
    var initial = str.substring(0,1);
    var spaceOrNot = spaceAfter == true ? " " : "";
    if(str.length == 1){
        return "("+str+"(\\.?|\\w+)"+spaceOrNot+")";
    } else {
        return "("+str+spaceOrNot+"|"+initial+"\\.?"+spaceOrNot+")";
    }
}

function removeAccents(str){
    str = str.replace(/(ã|á|à|â|ä)/i,"a");
    str = str.replace(/(é|è|ê|ë)/i,"e");
    str = str.replace(/(í|ì|î|ï)/i,"i");
    str = str.replace(/(õ|ó|ò|ô|ö)/i,"o");
    str = str.replace(/(ú|ù|û|ü)/i,"u");
    str = str.replace("ç","c");
    return str;
}
