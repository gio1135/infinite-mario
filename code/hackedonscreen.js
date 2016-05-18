/**
 * Hacked in on screen controls
 */

$(function(){
    var tried = false;
    document.documentElement.addEventListener("click", function() {
        if(tried) return;
        var fullscreenYN = confirm('Would you like to go fullscreen?');
        if(fullscreenYN) {
            var canvas = document.documentElement;
            if (canvas.requestFullscreen) {
                canvas.requestFullscreen();
            } else if (canvas.msRequestFullscreen) {
                canvas.msRequestFullscreen();
            } else if (canvas.mozRequestFullScreen) {
                canvas.mozRequestFullScreen();
            } else if (canvas.webkitRequestFullscreen) {
                canvas.webkitRequestFullscreen();
            }
        }
        tried = true;
    });
    $('.buttons div').on('touchstart touchmove mousedown', function(){
        $this = $(this);
        if($this.hasClass('a')) {
            Enjine.KeyboardInput.KeyDownEvent({keyCode:83});
        } else if( $this.hasClass('b')) {
            Enjine.KeyboardInput.KeyDownEvent({keyCode:65});
        }
    });

    $('.arrows div').on('touchstart touchmove mousedown', function(){
        $this = $(this);
        if($this.hasClass('down')) {
            Enjine.KeyboardInput.KeyDownEvent({keyCode:40});
        } else if( $this.hasClass('up')) {
            Enjine.KeyboardInput.KeyDownEvent({keyCode:38});
        } else if( $this.hasClass('left')) {
            Enjine.KeyboardInput.KeyDownEvent({keyCode:37});
            Enjine.KeyboardInput.KeyUpEvent({keyCode:39});
        } else if( $this.hasClass('right')) {
            Enjine.KeyboardInput.KeyDownEvent({keyCode:39});
            Enjine.KeyboardInput.KeyUpEvent({keyCode:37});
        }
    });

    $('.buttons div').on('touchend mouseup', function(){
        $this = $(this);
        if($this.hasClass('a')) {
            Enjine.KeyboardInput.KeyUpEvent({keyCode:83});
        } else if( $this.hasClass('b')) {
            Enjine.KeyboardInput.KeyUpEvent({keyCode:65});
        }
    });

    $('.arrows div').on('touchend mouseup', function(){
        $this = $(this);
        if($this.hasClass('down')) {
            Enjine.KeyboardInput.KeyUpEvent({keyCode:40});
        } else if( $this.hasClass('up')) {
            Enjine.KeyboardInput.KeyUpEvent({keyCode:38});
        } else if( $this.hasClass('left')) {
            Enjine.KeyboardInput.KeyUpEvent({keyCode:37});
        } else if( $this.hasClass('right')) {
            Enjine.KeyboardInput.KeyUpEvent({keyCode:39});
        }
    });
});