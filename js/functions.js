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

var index = 0;
function autoChangeImage() {
    var currentImg = index % (images.length);
    $('#theImage').attr('src', images[currentImg]);
    index++;
}

function manualChangeImage(index) {
    var currentImg = index % (images.length);
    $('#theImage').attr('src', images[currentImg]);
}

//    when LEFT and RIGHT keys are pressed   LEFT: previous image,   RIGHT: next image
function keyPressFunc(e) {
//    if LEFT is clicked
    if (e.which == 37 || e.keyCode == 37) {
        manualChangeImage(--index);
    }

//    if RIGHT is clicked
    if (e.which == 39 || e.keyCode == 39) {
        manualChangeImage(++index);
    }
}

// Sanjar was here. :)

$(document).ready(function() {

    var timerImg = null;

//    when any image link is hovered
    $("a").mouseover(function() {
        if (timerImg) { clearInterval(timerImg); }
        switch ($(this).attr("name")) {
            case "test1": index=0; manualChangeImage(index); break;
            case "test2": index=1; manualChangeImage(index); break;
            case "test3": index=2; manualChangeImage(index); break;
            case "test4": index=3; manualChangeImage(index); break;
            case "test5": index=4; manualChangeImage(index); break;
            case "test6": index=5; manualChangeImage(index); break;
            case "test7": index=6; manualChangeImage(index); break;
        }
    });

//    when play btn is clicked
    $("#btn_play").click(function() {
        if (timerImg) { clearInterval(timerImg); }
        timerImg = setInterval (autoChangeImage, 300);
    });
});

