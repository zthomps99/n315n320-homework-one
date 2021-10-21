function changeRoute (){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    // console.log(hashTag + " " + pageID);

    if(pageID !="") {
    $.get(`pages/${pageID}/${pageID}.html`, function(pageHTML){
        console.log("pageHTML " + pageHTML);
        $("#app").html(pageHTML);
    });
    }else {
        $.get(`pages/home/home.html`, function(pageHTML){
            console.log("pageHTML " + pageHTML);
            $("#app").html(pageHTML);
        });
    }
}

function initURLListener (){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function() {
    initURLListener();
})