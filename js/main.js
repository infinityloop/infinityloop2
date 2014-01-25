$( document ).ready(function() {
    $('#quote1').bind('scroll', function()
                              {
                              console.log('scrolling...');
                                if($(this).scrollTop() + 
                                   $(this).innerHeight()
                                   >= $(this)[0].scrollHeight)
                                {
                                  alert('end reached');
                                }
                              })
});
 
 // Scroll Listener
$(window).scroll(function() {
    var offset = 250;
    if(($('#quote1').position().top - ($(document).scrollTop() + offset)) <= 0 ) {
        $('#quote1text').fadeIn();
        $('#quote1author').fadeIn();
        $('#quote1').blurjs({
            source: 'body',
            radius: 7,
            overlay: 'rgba(128,128,128,0.4)'
        });
        
    } else {
        $('#quote1text').fadeOut();
        $('#quote1author').fadeOut();
    }
    //console.log($('#quote1').innerHeight());
    //console.log($('#quote1')[0].scrollHeight);
});