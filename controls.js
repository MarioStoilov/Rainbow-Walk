var ui = (function() {
   var Directions = Object.freeze({
            UP: "up",
            DOWN: "down",
            LEFT: "left",
            RIGHT: "right",
            STOP: "stop"
        })
        
        directionSet = false,
   
   // Attaching event listeners
    $(document).ready(function() {
        $("body").on("keydown", getKey);
        $("body").on("keyup", getKeyUp);
    });

   //This method handles onKeyDown event
    function getKey(evt) {
            switch (evt.keyCode) {
       //Left arrow key, triggers changeDirrection event with direction: LEFT
                case 37:
                    evt.preventDefault();
                    if (!directionSet) {
                        $("body").trigger({
                            type:"moveCommand",
                            direction: Directions.LEFT
                        });
                        directionSet = true;
                    }
                    break;
       //Up arrow key, triggers changeDirrection event with direction: UP
                case 38:
                    evt.preventDefault();
                    if (!directionSet) {
                        $("body").trigger({
                            type:"moveCommand",
                            direction: Directions.UP
                        });
                        directionSet = true;
                    }
                    break;
       //Right arrow key, triggers changeDirrection event with direction: RIGHT
                case 39:
                    evt.preventDefault();
                    if (!directionSet) {
                        $("body").trigger({
                            type:"moveCommand",
                            direction: Directions.RIGHT
                        });
                        directionSet = true;
                    }
                    break;
       //Down arrow key, triggers changeDirrection event with direction: DOWN
                case 40:
                    evt.preventDefault();
                    if (!directionSet) {
                        $("body").trigger({
                            type:"moveCommand",
                            direction: Directions.DOWN
                        });
                        directionSet = true;
                    }
                    break;
       //Letter "q" pressed, triggers executeCommand event with command: QUIT
                case 81:
                    evt.preventDefault();
                    $("body").trigger({
                        type:"executeCommand",
                        command: Commands.QUIT
                    });
                    break;
                default:
            }
    }

    function getKeyUp(evt) {
        if (evt.keyCode === 37 || evt.keyCode === 38 || 
            evt.keyCode === 39 || evt.keyCode === 40) {
            evt.preventDefault();
            directionSet = false;
        }
    }    
    
    return {
        
    };
}());










