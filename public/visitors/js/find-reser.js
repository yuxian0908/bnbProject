$('input').keyup(function(e){   
    if($(this).val().length==$(this).attr('maxlength'))   
    $(this).nextAll(":input").eq(0).focus();   
}); 
