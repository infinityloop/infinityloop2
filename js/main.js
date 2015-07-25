var showSkills = true;
var openProjects = true;
var fadeSpeed = 400;
var quote1Timer;
var quote2Timer;
var lastTechQuoteIndex = 0;
var lastMAQuoteIndex = 0;
var techQuoteArray = new Array();
var MAQuoteArray = new Array();

prepareQuotes();

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
    
    if(atActivationPoint($('.timeline-start')) && openProjects == true) {
        $('#timeline > li:first> :radio').prop('checked', true);
        openProjects = false;
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

function prepareQuotes(){

    MAQuoteArray.push(createQuoteObject("Think lightly of yourself and deeply of the world.", "Miyamoto Musashi"));
    MAQuoteArray.push(createQuoteObject("Learning jiu-jitsu is something for the subconscious, not for the consciousness.", "Helios Gracie"));    
    MAQuoteArray.push(createQuoteObject("Empty your mind, be formless. Shapeless... Be water, my friend." , "Bruce Lee"));
    MAQuoteArray.push(createQuoteObject("We learn martial arts as helping weakness. You never fight for people to get hurt. You're always helping people." , "Jackie Chan"));
    MAQuoteArray.push(createQuoteObject("The supreme art of war is to subdue the enemy without fighting." , "Sun Tzu"));

    techQuoteArray.push(createQuoteObject("Any sufficiently advanced technology is indistinguishable from magic.", "Arthur C. Clarke"));
    techQuoteArray.push(createQuoteObject("It's still magic even if you know how it's done.", "Terry Pratchett"));    
    techQuoteArray.push(createQuoteObject("I learned not to worry so much about the outcome, but to concentrate on the step I was on and to try to do it as perfectly as I could when I was doing it." , "Steve Wozniak"));
    techQuoteArray.push(createQuoteObject("Everyday life is like programming, I guess. If you love something you can put beauty into it." , "Donald Knuth"));
    techQuoteArray.push(createQuoteObject("Intelligence is the ability to avoid doing work, yet getting the work done. " , "Linus Torvald"));

}

function displayQuote(quoteId, quote) {
    $('#'+quoteId + 'text').text('"' + quote.quote + '" ');
    $('#'+quoteId + 'author').text('  - ' + quote.author + '  ');
        
    $('#'+quoteId + 'container').fadeIn(fadeSpeed);
    $('#'+quoteId + 'text').fadeIn(fadeSpeed);
    $('#'+quoteId + 'author').fadeIn(fadeSpeed);   
}

function getTechQuote() {
    var currentIndex = lastTechQuoteIndex;
    lastTechQuoteIndex = (lastTechQuoteIndex + 1) % techQuoteArray.length; 
    return techQuoteArray[currentIndex];
}

function getMAQuote() {
    var currentIndex = lastMAQuoteIndex;
    lastMAQuoteIndex = (lastMAQuoteIndex + 1) % MAQuoteArray.length; 
    return MAQuoteArray[currentIndex];
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

function atActivationPoint($item, $offset) {
    if(typeof offset == 'undefined') {
        offset = 0;
    }
    var centerpoint = $(window).height()/ 2.5;
    var adjustment = centerpoint + offset;
    return (($item.position().top - ($(document).scrollTop() + adjustment)) <= 0)
}

function activateSkills() {
    var ctx = $("#skillsChart").get(0).getContext("2d");

    var data = {
    labels: ["PHP", "Javascript", "C#", "MySQL", "HTML5", "CSS3", "Objective-C/Swift", "Android/Java"],
    datasets: [
        {
            label: "Interests",
            fillColor: "rgba(253, 200, 121, 0.4",
            strokeColor: "rgba(252, 176, 64, 0.4)",
            pointColor: "rgba(252, 176, 64, 0.4)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [75, 90, 52, 40, 85, 85, 90, 75]
        },
        {
            label: "Expertise",
            fillColor: "rgba(134, 149, 183, 0.66)",
            strokeColor: "rgba(66, 90, 143, 0.66)",
            pointColor: "rgba(66, 90, 143, 0.66)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [95, 80, 24, 75, 70, 70, 60, 45]
        }]
    };

    var myRadarChart = new Chart(ctx).Radar(data, {
        showTooltips: false,
        pointDot: false
    });

    $('.skillText').fadeIn(555);
}


function sendGmail() {
    window.open('https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;to=Kelvin@infinityloop.ca',
                               'Compose new message','width=640,height=480');
                               
     return false; 
}