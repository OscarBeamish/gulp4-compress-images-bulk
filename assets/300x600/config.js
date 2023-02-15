const code = null
const momentum = {
    "ES" : ["es_ES"],
    "AR" : ["ar_ME", "ar_SA", "ar_AE", "ar_KW"],
    "FR" : ["fr_FR"],
    "FR_ALT" : ["fr_CA"],
    "PT" : ["pt_PT", "pt_BR"],
    "JP" : ["ja_JP"],
    "RU" : ["ru_RU"],
    "TR" : ["tr_TR"]
}
var rating

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function RTL(){
    if(code == "ar_AE" || code == "ar_ME" || code == "ar_SA" || code == "he_IL"){
        return true
    }else{
        return false
    }
}
function findMomentum(){
    let isLoc = Object.values(momentum)
    for (var i=0; i<isLoc.length; i++){
        if (isLoc[i].includes(code)){
            return getKeyByValue(momentum, isLoc[i]);
        }
    }
    return "EN"
}

const sameRating = false

const legal1 = rating
const legal2 = rating
const legal3 = rating
const legal4 = rating
const legalEnd = rating


//endframe layout controls
var Xpos = 0
var Ypos = -77
var Xoffset = 104
var Yoffset = 123
var DiscountYoffset = -52