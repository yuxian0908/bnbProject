// $('a[data-toggle="tab"]').on('shown.bs.tab', function (e)
// {
//     if(!$("#myNavbar").is(":hidden"))
//     {
//         $("#myNavbar")[0].click();
//     }
// });
$(document).ready(function(){
    $(".nav > li > a").click(function(){  
        setTimeout(function(){
        $('#collapse').addClass("collapsed");  
        $('#collapse').attr("aria-expanded",false);  
        $("#myNavbar").removeClass("in");  
        $("#myNavbar").attr("aria-expanded",false); 
        },300);
    });  
});
