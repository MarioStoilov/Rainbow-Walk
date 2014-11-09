/**
 * Created by Mario on 08-Nov-14.
 */
var progress = (function()
{
    var progressObject = {
      piano: false,
      rainbow:0,
      tower: 0,
      math:false
    };

    function getProgress()
    {
        var ret = localStorage.getItem('progressObject');
        if (!ret)
        {
            localStorage.setItem('progressObject', JSON.stringify(progressObject));
        }
        return JSON.parse(localStorage.getItem('progressObject'));
    }

    function bindProgress()
    {
        var progress = getProgress();

        var pianoImage = document.getElementById("progress-piano");
        bindCurrentImage(pianoImage, progress.piano);

        var mathImage = document.getElementById("progress-math");
        bindCurrentImage(mathImage, progress.math);

        var rainbowImage = document.getElementById("progress-rainbow-walk");
        bindCurrentImageWithTitle(rainbowImage, progress.rainbow);

        var towerImage = document.getElementById("progress-icyTower");
        bindCurrentImageWithTitle(towerImage, progress.tower);

        if (progress.piano && progress.math && progress.tower>0 && progress.rainbow>0 && !fireworksClass.fired())
        {
            fireworksClass.fire();
        }
    }

    function bindCurrentImageWithTitle(towerImage, score)
    {
        if (score==0)
        {
            towerImage.setAttribute("style", "opacity: 0.4; filter: alpha(opacity=40);")
        }
        else
        {
            towerImage.setAttribute("style", "")
            towerImage.setAttribute("title", "score: "+score);
        }
    }

    function bindCurrentImage(image, progress)
    {
        if (!progress)
        {
            image.setAttribute("style", "opacity: 0.4; filter: alpha(opacity=40);")
        }
        else
        {
            image.setAttribute("style", "")
        }
    }

    function completePiano()
    {
        var progress = getProgress();
        progress.piano=true;
        localStorage.setItem('progressObject', JSON.stringify(progress));
        bindProgress();
    }

    function completeMath()
    {
        var progress = getProgress();
        progress.math=true;
        localStorage.setItem('progressObject', JSON.stringify(progress));
        bindProgress();
    }

    function completeRainbow(time)
    {
        var progress = getProgress();
        progress.rainbow=time;
        localStorage.setItem('progressObject', JSON.stringify(progress));
        bindProgress();
    }

    function completeTower(score)
    {
        var progress = getProgress();
        progress.tower=score;
        localStorage.setItem('progressObject', JSON.stringify(progress));
        bindProgress();
    }

    return{
        getProgress: getProgress,
        bindProgress: bindProgress,
        completePiano: completePiano,
        completeRainbow: completeRainbow,
        completeTower: completeTower,
        completeMath: completeMath
    }
}());