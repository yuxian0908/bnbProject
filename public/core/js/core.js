$(document).ready(function(){
    if($(document).width()<700){
        $('.navbar a').on('click', function(){
            $('.navbar-toggle').click();
        });
    }
});