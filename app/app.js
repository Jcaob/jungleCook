import { changePage } from "./model.js";

// function toggleMenu(menu){
//     menu.classList.toggle('open');
// }

function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    $("#bread-crumb").html(``);
    changePage(hashTag, pageID);
    
}

function initListeners(){

}

function initSite(){
     $(window).on("hashchange", route)
     route();
}

$(document).ready(function () {
    
    initSite()
    
}   );