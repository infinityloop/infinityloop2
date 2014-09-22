 var showSkills = true;
 var fadeSpeed = 400;
 var quote1Timer ;
 var quote2Timer;
 // Scroll Listener
$(window).scroll(function() {
        
    if(atActivationPoint($('#quote1'))) {
        if($('#quote1container').is(':visible') == false) {
            var quote = getTechQuote();
            displayQuote('quote1', quote);
            window.clearInterval(quote1Timer);
            quote1Timer = window.setInterval(function() {
                cycleQuote('quote1', 'tech');
            }, 5000);
        }
    } else {
        window.clearInterval(quote1Timer);
        $('#quote1container').fadeOut(fadeSpeed);
        $('#quote1text').fadeOut(fadeSpeed);
        $('#quote1author').fadeOut(fadeSpeed);
    }
    
    if(atActivationPoint($('#quote2'))) {
        if($('#quote2container').is(':visible') == false) {
            var quote = getMAQuote();
            displayQuote('quote2', quote);
            window.clearInterval(quote2Timer);
            quote2Timer = window.setInterval(function() {
                cycleQuote('quote2', 'MA');
            }, 5000);
        }
    } else {
        window.clearInterval(quote2Timer);
        $('#quote2container').fadeOut(fadeSpeed);
        $('#quote2text').fadeOut(fadeSpeed);
        $('#quote2author').fadeOut(fadeSpeed);
    }
    
    if(atActivationPoint($('#skills')) && showSkills == true) {
        activateSkills();
        showSkills = false;
    }
});

function cycleQuote(quoteId, type) {
        if($('#' + quoteId + 'container').is(':visible') == true) {
            $('#' + quoteId + 'container').fadeOut(fadeSpeed);
            $('#' + quoteId + 'text').fadeOut(fadeSpeed);
            $('#' + quoteId + 'author').fadeOut(fadeSpeed, function() {
                switch(type) {
                    case 'tech':
                        var quote = getTechQuote();
                        break;
                    case 'MA':
                        var quote = getMAQuote();
                        break;
                    default:
                        break;
                }
                displayQuote(quoteId, quote);
            });
        }
}

function displayQuote(quoteId, quote) {
    $('#'+quoteId + 'text').text('"' + quote.quote + '" ');
    $('#'+quoteId + 'author').text('  - ' + quote.author + '  ');
        
    $('#'+quoteId + 'container').fadeIn(fadeSpeed);
    $('#'+quoteId + 'text').fadeIn(fadeSpeed);
    $('#'+quoteId + 'author').fadeIn(fadeSpeed);   
}

function getTechQuote() {

    var TechquoteArray = new Array();

    TechquoteArray.push(createQuoteObject("Any sufficiently advanced technology is indistinguishable from magic.", "Arthur C. Clarke"));
    TechquoteArray.push(createQuoteObject("It's still magic even if you know how it's done.", "Terry Pratchett"));    
    TechquoteArray.push(createQuoteObject("I learned not to worry so much about the outcome, but to concentrate on the step I was on and to try to do it as perfectly as I could when I was doing it." , "Steve Wozniak"));
    TechquoteArray.push(createQuoteObject("Everyday life is like programming, I guess. If you love something you can put beauty into it." , "Donald Knuth"));
    TechquoteArray.push(createQuoteObject("Intelligence is the ability to avoid doing work, yet getting the work done. " , "Linus Torvald"));

    randomReturn = randomIntFromInterval(0, TechquoteArray.length);
    return TechquoteArray[randomReturn];
}

function getMAQuote() {

    var MAquoteArray = new Array();

    MAquoteArray.push(createQuoteObject("Think lightly of yourself and deeply of the world.", "Miyamoto Musashi"));
    MAquoteArray.push(createQuoteObject("Learning jiu-jitsu is something for the subconscious, not for the consciousness.", "Helios Gracie"));    
    MAquoteArray.push(createQuoteObject("Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. Be water, my friend." , "Bruce Lee"));
    MAquoteArray.push(createQuoteObject("We learn martial arts as helping weakness. You never fight for people to get hurt. You're always helping people." , "Jackie Chan"));
    MAquoteArray.push(createQuoteObject("The supreme art of war is to subdue the enemy without fighting." , "Sun Tzu"));

    randomReturn = randomIntFromInterval(0, MAquoteArray.length);
    return MAquoteArray[randomReturn];
}


function createQuoteObject(quote, author) {
    var object = new Object();
    object.quote = quote;
    object.author= author;
    
    return object;
}

var lastNum;

// Make it random, but don't repeat it
function randomIntFromInterval(min,max)
{
    var num =  Math.floor(Math.random()*(max-min)+min);
    while(num == lastNum) {
        num =  Math.floor(Math.random()*(max-min)+min);
    }
    lastNum = num;
    return num;
}

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