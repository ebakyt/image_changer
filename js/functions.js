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

//    when 1 or 3 keys are pressed   1: previous image,   3: next image
function keyPressFunc(KeyEvent e) {
		int keyCode = e.getKeyCode();
    switch( keyCode ) { 
        case KeyEvent.VK_LEFT:
            // handle left
            manualChangeImage(--index);
            break;
        case KeyEvent.VK_RIGHT :
            // handle right
            manualChangeImage(++index);
            break;
     }

}


$(document).ready(function() {

    var timerImg = null;

//    when any a link hovered
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

//    when play btn clicked
    $("#btn_play").click(function() {
        if (timerImg) { clearInterval(timerImg); }
        timerImg = setInterval (autoChangeImage, 300);
    });
});

