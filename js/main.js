$(document).ready(function() {
    // Initialize the isotop project area
    $('#projectcontainer').isotope({
        itemSelector: '.projectsquare',
        sortBy: 'random',
        masonry: {
            columnWidth: 10
         }
    });
    
    // Raphael Skill Circle
    var archtype = Raphael("skillsCanvas", 400, 400);
    archtype.customAttributes.arc = function (xloc, yloc, value, total, R) {
        var alpha = 360 / total * value,
            a = (90 - alpha) * Math.PI / 180,
            x = xloc + R * Math.cos(a),
            y = yloc - R * Math.sin(a),
            path;
        if (total == value) {
            path = [
                ["M", xloc, yloc - R],
                ["A", R, R, 0, 1, 1, xloc - 0.01, yloc - R]
            ];
        } else {
            path = [
                ["M", xloc, yloc - R],
                ["A", R, R, 0, +(alpha > 180), 1, x, y]
            ];
        }
        return {
            path: path
        };
    };
    
    //make an arc at 50,50 with a radius of 30 that grows from 0 to 40 of 100 with a linear
    var php_arc = archtype.path().attr({
        "stroke": "#99c",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 30]
    });

    var html_arc = archtype.path().attr({
        "stroke": "#f51",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 20]
    });
    
     var jquery_arc = archtype.path().attr({
        "stroke": "#0769AD",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 20]
    });
     var css_arc = archtype.path().attr({
        "stroke": "#8AC007",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 20]
    });
    
     var sql_arc = archtype.path().attr({
        "stroke": "#FE0",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 20]
    });
    
     var csharp_arc = archtype.path().attr({
        "stroke": "#68217a",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 20]
    });
    
     var java_arc = archtype.path().attr({
        "stroke": "#DE0000",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 20]
    });
    
     var java_arc = archtype.path().attr({
        "stroke": "#DE0000",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 20]
    });
    
     var c_arc = archtype.path().attr({
        "stroke": "#99C0FF",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 20]
    });
    
    php_arc.animate({
        arc: [200, 200, 76, 100, 170]
    }, 1500, "linear");

    html_arc.animate({
        arc: [200, 200, 68, 100, 150]
    }, 1500, "linear");
    
     jquery_arc.animate({
        arc: [200, 200, 68, 100, 130]
    }, 1500, "linear");
    
     css_arc.animate({
        arc: [200, 200, 62, 100, 110]
    }, 1500, "linear");
    
     sql_arc.animate({
        arc: [200, 200, 54, 100, 90]
    }, 1500, "linear");
    
     csharp_arc.animate({
        arc: [200, 200, 42, 100, 70]
    }, 1500, "linear");
    
     java_arc.animate({
        arc: [200, 200, 35, 100, 50]
    }, 1500, "linear");
    
     c_arc.animate({
        arc: [200, 200, 32, 100, 30]
    }, 1500, "linear");
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
    

    //console.log($('#quote1').innerHeight());
    //console.log($('#quote1')[0].scrollHeight);
    //console.log('projectDiv: ' + ($('#projects').position().top - ($(document).scrollTop() + offset * 2)));
    //console.log('offset: ' + offset);
    
    //console.log($('#projects').position().top);
    //var scrollBottom = $(window).scrollTop() + $(window).height();
    //console.log($('#projects').position().top - scrollBottom);
});


function sendGmail() {
    window.open('https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;to=Kelvin@infinityloop.ca',
                               'Compose new message','width=640,height=480');
                               
     return false; 
}