$.fn.bounce = function(options) {
    
    var settings = $.extend({
        speed: 10
    }, options);

    return $(this).each(function() {
        
        var $this = $(this),
            $parent = $this.parent(),
            height = $parent.height(),
            width = $parent.width(),
            top = Math.floor(Math.random() * (height / 2)) + height / 4,
            left = Math.floor(Math.random() * (width / 2)) + width / 4,
            vectorX = settings.speed * (Math.random() > 0.5 ? 1 : -1),
            vectorY = settings.speed * (Math.random() > 0.5 ? 1 : -1);

        // place initialy in a random location
        $this.css({
            'top': top,
            'left': left
        }).data('vector', {
            'x': vectorX,
            'y': vectorY
        });

        var move = function($e)
        {
            var parentDiv = document.getElementById("wrapper");
            var parentOffsetX = parentDiv.offsetLeft;
            var parentOffsetY = parentDiv.offsetTop;
            
            var offset = $e.offset(),
                width = $e.width(),
                height = $e.height(),
                vector = $e.data('vector'),
                $parent = $e.parent();

            if (offset.left <= parentOffsetX && vector.x < 0) {
                vector.x = -1 * vector.x;
            }
            if ((offset.left + width) >= $parent.width()+parentOffsetX) {
                vector.x = -1 * vector.x;
            }
            if (offset.top <= parentOffsetY && vector.y < 0) {
                vector.y = -1 * vector.y;
            }
            if ((offset.top + height) >= $parent.height()+parentOffsetY)
            {
                vector.y = -1 * vector.y;
            }


            $e.css({
                'top': offset.top + vector.y +  'px',
                'left': offset.left + vector.x + 'px'
            }).data('vector', {
                'x': vector.x,
                'y': vector.y
            });
            
            setTimeout(function()
            {
                if (progress.getProgress().math)
                {
                    return;
                }
                move($e);
            }, 50);
            
        };
        
        move($this);
    });

};

//$(function() {
//    $('#wrapper li').bounce({
//        'speed': 7
//    });
//});

