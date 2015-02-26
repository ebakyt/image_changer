/**
 * Created by akmaanai on 26.02.2015.
 */


var images = new Array ('images/img1.jpg',
                        'images/img2.jpg',
                        'images/img3.jpg',
                        'images/img4.jpg',
                        'images/img5.jpg',
                        'images/img6.jpg',
                        'images/img7.jpg');

var index = 1;
function autoChangeImage() {
    $('#theImage').attr('src', images[index]);
    if (index == images.length-1) {
        index = 0;
    } else {
        index++;
    }
}


$(document).ready(function() {

    var timerImg = null;

//    when any a link hovered
    $("a").mouseover(function() {
        if (timerImg) { clearInterval(timerImg); }
        switch ($(this).attr("name")) {
            case "test1": $("#theImage").attr("src", images[0]); break;
            case "test2": $("#theImage").attr("src", images[1]); break;
            case "test3": $("#theImage").attr("src", images[2]); break;
            case "test4": $("#theImage").attr("src", images[3]); break;
            case "test5": $("#theImage").attr("src", images[4]); break;
            case "test6": $("#theImage").attr("src", images[5]); break;
            case "test7": $("#theImage").attr("src", images[6]); break;
        }
    });

//    when play btn clicked
    $("#btn_play").click(function() {
        if (timerImg) { clearInterval(timerImg); }
        timerImg = setInterval (autoChangeImage, 300);
    });

});



