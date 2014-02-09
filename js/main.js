$(document).ready(function() {
    // Initialize the isotop project area
    $('#projectcontainer').isotope({
        itemSelector: '.projectsquare',
        sortBy: 'random',
        masonry: {
            columnWidth: 10
         }
    });
    
});
 
 var showSkills = true;
 
 // Scroll Listener
$(window).scroll(function() {
        
    if(atActivationPoint($('#quote1'))) {
        $('#quote1text').fadeIn();
        $('#quote1author').fadeIn();
        
    } else {
        $('#quote1text').fadeOut();
        $('#quote1author').fadeOut();
    }
    
    if(atActivationPoint($('#skills')) && showSkills == true) {
        activateSkills();
        showSkills = false;
    }

    //console.log($('#quote1').innerHeight());
    //console.log($('#quote1')[0].scrollHeight);
    //console.log('projectDiv: ' + ($('#projects').position().top - ($(document).scrollTop() + offset * 2)));
    //console.log('offset: ' + offset);
    
    //console.log($('#projects').position().top);
    //var scrollBottom = $(window).scrollTop() + $(window).height();
    //console.log($('#projects').position().top - scrollBottom);
});

function atActivationPoint($item) {
    var offset = $(window).height()/ 2.5;
    return (($item.position().top - ($(document).scrollTop() + offset)) <= 0)
}

function activateSkills() {
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
    
    var php_arc;
    var html_arc;
    var jquery_arc;
    var css_arc;
    var sql_arc;
    var csharp_arc;
    var java_arc;
    var c_arc;
    
    //make an arc at 200,200 with a radius of 30 that grows from 0 to X of 100 with a linear
    php_arc = archtype.path().attr({       
        "stroke": "#99c",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 30]
    });

    html_arc = archtype.path().attr({
        "stroke": "#e34a22",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 20]
    });
    
    jquery_arc = archtype.path().attr({
        "stroke": "#0769AD",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 20]
    });
    
    css_arc = archtype.path().attr({
        "stroke": "#8AC007",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 20]
    });
    
    sql_arc = archtype.path().attr({
        "stroke": "#e97b00",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 20]
    });
    
    csharp_arc = archtype.path().attr({
        "stroke": "#68217a",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 20]
    });
    
    java_arc = archtype.path().attr({
        "stroke": "#DE0000",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 20]
    });
    
    c_arc = archtype.path().attr({
        "stroke": "#99C0FF",
        "stroke-width": 16,
        arc: [200, 200, 0, 100, 20]
    });
    
    
    php_arc.animate({
        arc: [200, 200, 76, 100, 170]
    }, 1700, "linear");

    html_arc.animate({
        arc: [200, 200, 68, 100, 150]
    }, 1550, "linear");
    
    jquery_arc.animate({
        arc: [200, 200, 68, 100, 130]
    }, 1550, "linear");
    
    css_arc.animate({
        arc: [200, 200, 62, 100, 110]
    }, 1300, "linear");
    
    sql_arc.animate({
        arc: [200, 200, 54, 100, 90]
    }, 1150, "linear");
    
    csharp_arc.animate({
        arc: [200, 200, 42, 100, 70]
    }, 1000, "linear");
    
    java_arc.animate({
        arc: [200, 200, 35, 100, 50]
    }, 850, "linear");
    
    c_arc.animate({
        arc: [200, 200, 32, 100, 30]
    }, 700, "linear");
    
    $('.skillBlock').fadeIn(1700);
}


function sendGmail() {
    window.open('https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;to=Kelvin@infinityloop.ca',
                               'Compose new message','width=640,height=480');
                               
     return false; 
}