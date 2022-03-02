/* Takes a paramter and used interpolation `${parameter}` */
function introduction(name){
    return `Hi, my name is ${name}.`;
}

/* Takes in two paramters and uses interpolation `${parameter}` & `${language}` */
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

/* Takes in two paramters and uses where language is optional AND can be overidden with an argument */
function introductionWithLanguageOptional(name, language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
