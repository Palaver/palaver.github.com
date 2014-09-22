/// GENERAL ////////////////////////////////////////////////////////////////////

//Show loader for canvas.
$('#loading').addClass('animate');

$(window).load(function(){
    if (!$('#loading').hasClass('fade')) $('#loading').addClass('fade');
});

//Menu link: Contact
$('header > nav li:nth-of-type(3)').click(function(){ $("body").animate({ 
    scrollTop: ($('body').height()-$(window).height()+30) 
}, 1000); return false; });

