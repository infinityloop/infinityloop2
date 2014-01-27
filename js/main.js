$(document).ready(function() {

    
});
 
 var showProjects = true;
 
 // Scroll Listener
$(window).scroll(function() {
    var offset = $(window).height()/ 2.5;
    var scrollBottom = $(window).scrollTop() + $(window).height();
    
    if(($('#quote1').position().top - ($(document).scrollTop() + offset)) <= 0 ) {
        $('#quote1text').fadeIn();
        $('#quote1author').fadeIn();
        
    } else {
        $('#quote1text').fadeOut();
        $('#quote1author').fadeOut();
    }
    
    if(($('#projects').position().top - scrollBottom) <= 0 && showProjects == true) {

        $('#projectcontainer').fadeIn(2500);
        $('#projectcontainer').isotope({
            itemSelector: '.projectsquare',
            masonry: {
                columnWidth: 10
             }
        });
        showProjects = false;
    }
    //console.log($('#quote1').innerHeight());
    //console.log($('#quote1')[0].scrollHeight);
    //console.log('projectDiv: ' + ($('#projects').position().top - ($(document).scrollTop() + offset * 2)));
    //console.log('offset: ' + offset);
    console.log($('#projects').position().top);
    var scrollBottom = $(window).scrollTop() + $(window).height();
    console.log($('#projects').position().top - scrollBottom);
});
