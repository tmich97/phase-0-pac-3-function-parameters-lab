/* Takes a paramter and used interpolation `${parameter}` */
function introduction(name){
    return `Hi, my name is ${name}.`;
}

/* Takes in two paramters and uses interpolation `${parameter}` & `${language}` */
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}


function introductionWithLanguageOptional(name, language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
