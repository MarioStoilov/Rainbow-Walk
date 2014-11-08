/**
 * Created by Mario on 08-Nov-14.
 */
var progress = (function()
{
    var progressObject = {
      piano: false,
      rainbow:false,
      tower: 0
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

        var rainbowImage = document.getElementById("progress-rainbow-walk");
        bindCurrentImage(rainbowImage, progress.rainbow);

        var towerImage = document.getElementById("progress-icyTower");
        bindTower(towerImage, progress.tower);
    }

    function bindTower(towerImage, score)
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

    function completeRainbow()
    {
        var progress = getProgress();
        progress.rainbow=true;
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
        completeTower: completeTower
    }
}());