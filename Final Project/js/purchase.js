$(function(){
    
    console.log("hello");
    
    $("#logo-change").on("mouseenter", function(){
        var currentsource = $(this).attr("src");
        var newSource = currentsource.replace("img/", "img/alt_")
        $(this).attr("src", newSource);
    });
    
    $("#logo-change").on("mouseleave", function(){
        var currentsource = $(this).attr("src");
        var newSource = currentsource.replace("img/alt_", "img/")
        $(this).attr("src", newSource);
    });
    

});