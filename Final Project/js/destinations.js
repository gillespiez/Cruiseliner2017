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
    
    
  //FIX THIS  
   $(".opt-one").on("mouseenter", function(){
        
        $(this).find(".purchase_but").animate({"opacity" : "9"}, 1000);
        
    });
    
    $(".opt-one").on("mouseleave", function(){
        
        $(this).find(".purchase_but").animate({"opacity" : "0"});
        
    });
    
    $(".opt-two").on("mouseenter", function(){
        
        $(this).find(".purchase_but").animate({"opacity" : "9"}, 1000);
        
    });
    
    $(".opt-two").on("mouseleave", function(){
        
        $(this).find(".purchase_but").animate({"opacity" : "0"});
        
    });
    
    $(".opt-three").on("mouseenter", function(){
        
        $(this).find(".purchase_but").animate({"opacity" : "9"}, 1000);
        
    });
    
    $(".opt-three").on("mouseleave", function(){
        
        $(this).find(".purchase_but").animate({"opacity" : "0"});
        
    });
    
    $(".opt-four").on("mouseenter", function(){
        
        $(this).find(".purchase_but").animate({"opacity" : "9"}, 1000);
        
    });
    
    $(".opt-four").on("mouseleave", function(){
        
        $(this).find(".purchase_but").animate({"opacity" : "0"});
        
    });
    
    $(".opt-five").on("mouseenter", function(){
        
        $(this).find(".purchase_but").animate({"opacity" : "9"}, 1000);
        
    });
    
    $(".opt-five").on("mouseleave", function(){
        
        $(this).find(".purchase_but").animate({"opacity" : "0"});
        
    });
    
    $(".opt-six").on("mouseenter", function(){
        
        $(this).find(".purchase_but").animate({"opacity" : "9"}, 1000);
        
    });
    
    $(".opt-six").on("mouseleave", function(){
        
        $(this).find(".purchase_but").animate({"opacity" : "0"});
        
    });
    
    $(".opt-seven").on("mouseenter", function(){
        
        $(this).find(".purchase_but").animate({"opacity" : "9"}, 1000);
        
    });
    
    $(".opt-seven").on("mouseleave", function(){
        
        $(this).find(".purchase_but").animate({"opacity" : "0"});
        
    });
 
    //CHANGE AESTHETIC
    $(".opt-one").on("click", function(){
        
        $(this).parent().toggleClass("highlight-one");
        
        
    });  
    
    $(".opt-two").on("click", function(){
        
        $(this).parent().toggleClass("highlight-two");
        
        
    });  
    
    $(".opt-three").on("click", function(){
        
        $(this).parent().toggleClass("highlight-three");
        
        
    });  
    
    $(".opt-four").on("click", function(){
        
        $(this).parent().toggleClass("highlight-four");
        
        
    });  
    
    $(".opt-five").on("click", function(){
        
        $(this).parent().toggleClass("highlight-five");
        
        
    }); 
    
    $(".opt-six").on("click", function(){
        
        $(this).parent().toggleClass("highlight-six");
        
        
    });  
    
    $(".opt-seven").on("click", function(){
        
        $(this).parent().toggleClass("highlight-seven");
        
        
    });
    
    //FILTER
    $(function() {
        
        $("#filter-butt").on("click", function(event){
            event.preventDefault();
        });
        
        if ($("#dropdown").val() === "ALL") {
            $(".destination-opt").show();
        }
        
        if ($("#dropdown").val() === "SHORT") {
            $(".destination-opt").hide();
            $(".destination-opt").each(function() {
                if ($(this).data("type") === "short") {
                    $(this).show();
                }
                
            });
        }
        
        
        
        
    });
    
    
    
    
    
    
    
    
    
    //FILTER
    
    
    
});