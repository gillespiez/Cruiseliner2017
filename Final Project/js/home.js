$(function(){
    
    console.log("hello");
    
    $("h1").text("Welcome to Octopus Cruises");
    
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
    
   $( ".destinations-map" ).click(function() {
    if ( $(this).height() === 65)
          $( this ).animate({ height: 200 }, 1000 );
    else
         $( this ).animate({ height: 65 }, 1000 );
});    
    
    
    
    $( ".add-info" ).click(function() {
    if ( $(this).height() === 65)
          $( this ).animate({ height: 200 }, 1000 );
    else
         $( this ).animate({ height: 65 }, 1000 );
});   
    
    
    $( ".faq" ).click(function() {
    if ( $(this).height() === 65)
          $( this ).animate({ height: 500 }, 1000 );
    else
         $( this ).animate({ height: 65 }, 1000 );
});  

})




