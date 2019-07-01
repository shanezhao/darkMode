//document.body.style.border = "5px solid red";

document.getElementById("gb").style.backgroundColor = "#2b2b2b"
document.getElementById("gsr").style.backgroundColor = "#2b2b2b"


document.getElementById("main").style.backgroundColor = "#2b2b2b"
document.getElementById("hdtbSum").style.backgroundColor = "#2b2b2b"

var topabar = document.getElementById("topabar");
if(topabar != null) {
    topabar.style.backgroundColor = "#2b2b2b"
}
var top_nav = document.getElementById("top_nav");
if(top_nav != null) {
    top_nav.style.backgroundColor = "#2b2b2b"
}

var fbar = document.getElementById("fbar");
fbar.style.cssText = "background-color:#2b2b2b; border: #2b2b2b;"

//why is there ID and Class on home page... document.getElementById("fbar").style.borderColor = "#303030"
//document.getElementsByClassName("EvHmz hRvfYe")[0].style.backgroundColor = "#303030"
//document.getElementsByClassName("jhp")[0].style.backgroundColor = "#303030"

var knowledgePanel = document.getElementsByClassName("knowledge-panel");
/*
if(knowledgePanel[0] != null) {
    knowledgePanel[0].style.backgroundColor = "#5b5b5b";
}
*/
var kp_blk = document.getElementsByClassName("kp-blk");
var top_stories = document.getElementsByClassName("qmv19b");


var numInnerCard = document.getElementsByTagName("g-inner-card").length;
var numSt_tag = document.getElementsByClassName("st").length;
var numEm_tag = document.getElementsByTagName("em").length;
var numCite_tag = document.getElementsByTagName("cite").length;
var numH3_tag = document.getElementsByTagName("h3").length;
var numA_tag = document.getElementsByTagName("a").length;
var gAccordionExpanderTag = document.getElementsByTagName("g-accordion-expander");
var top_stories_cite_tag = document.getElementsByClassName("wqg8ad");
var h4_tag = document.getElementsByTagName("h4");
var h3_tag = document.getElementsByTagName("h3");
var h2_tag = document.getElementsByTagName("h2");
var h1_tag = document.getElementsByTagName("h1");
var appbar = document.getElementById("appbar");
var exp_outline = document.getElementsByClassName("exp-outline");
var exp_r = document.getElementsByClassName("exp-r");

var num_gAccordion_objects = gAccordionExpanderTag.length;

if(numInnerCard > 0) {
    for(var i = 0; i<numInnerCard; i++) {
        document.getElementsByTagName("g-inner-card")[i].style.backgroundColor = "#5b5b5b"
        document.getElementsByTagName("g-inner-card")[i].style.borderColor = "#5b5b5b"
    }
}

if(numSt_tag > 0 ) {
    for(var i = 0; i<numSt_tag; i++) {
        document.getElementsByClassName("st")[i].style.color = "#cccdce"
    }
}
if(numEm_tag > 0 ) {
    for(var i = 0; i<numEm_tag; i++) {
        document.getElementsByTagName("em")[i].style.color = "white"
    }
}
if(numCite_tag > 0 ) {
    for(var i = 0; i<numCite_tag; i++) {
        document.getElementsByTagName("cite")[i].style.color = "#00dd3b"
    }
}
if(numH3_tag > 0 ) {
    for(var i = 0; i<numH3_tag; i++) {
        document.getElementsByTagName("h3")[i].style.color = "#77a3ff"        
    }
}
if(numA_tag > 0) {
    for(var i = 0; i<numA_tag; i++) {
        document.getElementsByTagName("a")[i].style.color = "#b2c9ff"
    }
}
if(gAccordionExpanderTag.length > 0) {
    for(var i = 0; i<gAccordionExpanderTag.length; i++) {
        gAccordionExpanderTag[i].style.color = "white"
    }
}
if(h4_tag.length > 0) {
    for(var i = 0; i<h4_tag.length; i++) {
        document.getElementsByTagName("h4")[i].style.color = "#595959"
    }
}
/*
if(h3_tag.length > 0) {
    for(var i = 0; i<h3_tag.length; i++) {
        h3_tag[i].style.color = "#212121"
    }
}
*/
if(h2_tag.length > 0) {
    for(var i = 0; i<h2_tag.length; i++) {
        h2_tag[i].style.color = "#212121"
    }
}
if(h1_tag.length > 0) {
    for(var i = 0; i<h1_tag.length; i++) {
        h1_tag[i].style.color = "#212121"
    }
}
if(kp_blk.length > 0) {
    for(var i = 0; i<kp_blk.length; i++){
        kp_blk[i].style.backgroundColor = "#616161"
    }
}
if(top_stories.length > 0) {
    for(var i = 0; i<top_stories.length; i++) {
        top_stories[i].style.backgroundColor = "#616161"
    }
}
if(top_stories_cite_tag.length > 0) {
    for(var i = 0; i<top_stories_cite_tag.length; i++) {
        top_stories_cite_tag[i].style.color = "#00dd3b"
    }
}
if(appbar != null) {
    appbar.style.backgroundColor = "#2b2b2b"
}

if(exp_outline != null) {
    for(var i = 0; i<exp_outline.length; i++) {
        exp_outline[i].style.backgroundColor = "#454545"
    }
}
if(exp_r != null) {
    for(var i = 0; i<exp_r.length; i++) {
        exp_r[i].style.color = "#99aeff"
    }
}

//ID for location at the bottom of the search page
document.getElementById("Wprf1b").style.color = "#c9c9c9"

// aajZCb className for search options

//----attempting to update the bar when new items are added----//
gAccordionExpanderTag.addEventListener("click", update_gAccordion);
function update_gAccordion() {
    if(num_gAccordion_objects < gAccordionExpanderTag.length) {
        for(var i = num_gAccordion_objects; i<gAccordionExpanderTag.length; i++) {
            gAccordionExpanderTag[i].style.color = "white";
        }
        num_gAccordion_objects = gAccordionExpanderTag.length;
    }
}


/*
var objEm_tag = document.getElementsByTagName("em");
var objSt_tag = document.getElementsByTagName("st");
var objCite_tag = document.getElementsByTagName("cite");
var objH3_tag = document.getElementsByTagName("h3");
objSt_tag.forEach(e => {
    e.style.color = "#cccdce"
})

objEm_tag.forEach(e => {
    e.style.color = "white"
})

objCite_tag.forEach(e => {
    e.style.color = "#00dd3b"
})

objH3_tag.forEach(e => {
    e.style.color = "#77a3ff"
})
*/

