$( document ).ready(function() {
    $('#projectcontainer').isotope({
        itemSelector: '.projectsquare',
        masonry: {
            columnWidth: 200
         }
    });
    
    
});
 
 // Scroll Listener
$(window).scroll(function() {
    var offset = 250;
    if(($('#quote1').position().top - ($(document).scrollTop() + offset)) <= 0 ) {
        $('#quote1text').fadeIn();
        $('#quote1author').fadeIn();
        
    } else {
        $('#quote1text').fadeOut();
        $('#quote1author').fadeOut();
    }
    //console.log($('#quote1').innerHeight());
    //console.log($('#quote1')[0].scrollHeight);
});