var pianoClass = (function() {

  /* Piano keyboard pitches. Names match sound files by ID attribute. */
  
  var keys =[
    'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3',
    'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4',
    'A4', 'Bb4', 'B4', 'C5'
  ];

  /* Corresponding keyboard keycodes, in order w/ 'keys'. */
  /* QWERTY layout:
  /*   upper register: Q -> P, with 1-0 as black keys. */
  /*   lower register: Z -> M, , with A-L as black keys. */
  
  var codes = [
     90,   83,    88,   67,   70,    86,   71,    66,   78,   74,    77,   75,
     81,   50,    87,   69,   52,    82,   53,    84,   89,   55,    85,   56,
     73,   57,    79,   80
  ];
  
  var pedal = 32; /* Keycode for sustain pedal. */
  var tonic = 'A2'; /* Lowest pitch. */
  
  /* Piano state. */
  
  var intervals = {};
  var depressed = {};
  
  /* Selectors */
  
  function pianoClass(name) {
    return '.piano-' + name;
  };
  
  function soundId(id) {
    return 'sound-' + id;
  };
  
  function sound(id) {
    var it = document.getElementById(soundId(id));
    return it;
  };

  /* Virtual piano keyboard events. */
  
  function keyup(code)
  {
    var offset = codes.indexOf(code);
    var k;
    if (offset >= 0) {
      k = keys.indexOf(tonic) + offset;
      return keys[k];
    }
  };
  
  function keydown(code) {
    return keyup(code);
  };

  var melodie="";
  var notes = [
    {key:  'G4', duration: 300},
    {key:  'E4', duration: 300},
    {key:  'E4', duration: 500},
    {key:  'F4', duration: 300},
    {key:  'D4', duration: 300},
    {key:  'D4', duration: 500},
    {key:  'C4', duration: 300},
    {key:  'D4', duration: 300},
    {key:  'E4', duration: 300},
    {key:  'F4', duration: 300},
    {key:  'G4', duration: 300},
    {key:  'G4', duration: 300},
    {key:  'G4', duration: 500},
    {key:  'G4', duration: 300},
    {key:  'E4', duration: 300},
    {key:  'E4', duration: 500},
    {key:  'F4', duration: 300},
    {key:  'D4', duration: 300},
    {key:  'D4', duration: 500},
    {key:  'C4', duration: 300},
    {key:  'D4', duration: 300},
    {key:  'E4', duration: 300},
    {key:  'F4', duration: 300},
    {key:  'G4', duration: 300},
    {key:  'G4', duration: 300},
    {key:  'C4', duration: 300},
    {key:  'C4', duration: 300},
    {key:  'C4', duration: 700}

  ];

  function playNotes(notes) {
    var i = 0;
    playing=true;
    var playButton = document.getElementById("piano-play-button");
    playButton.innerHTML ="Replay melody";

    var statusDiv = document.getElementById("piano-status-melody");
    statusDiv.innerHTML ="Playing melody...";
    playNextNote();
    function playNextNote()
    {
      if (i>0)
      {
        var codeIndex = keys.indexOf(notes[i-1].key);
        depressed[notes[i-1].key]=false;
        kill(notes[i-1].key)();
      }
      if (i < notes.length)
      {
        var value = notes[i];
        press(value.key);
        i++;
        setTimeout(playNextNote, value.duration);
      }
      else
      {
        playing=false;
        statusDiv.innerHTML ="Now, you try it.";
      }
    }
  }
  
  function press(key) {
    var audio = sound(key);
    if (depressed[key]) {
      return;
    }
    clearInterval(intervals[key]);
    if (audio) {
      audio.pause();
      audio.volume = 1.0;
      if (audio.readyState >= 2) {
        audio.currentTime = 0;
        audio.play();
        depressed[key] = true;
      }
    }
    $(pianoClass(key)).animate({
      'backgroundColor': '#FF0000'
    }, 0);
  };

  /* Manually diminish the volume when the key is not sustained. */
  /* These values are hand-selected for a pleasant fade-out quality. */
  
  function fade(key) {
    var audio = sound(key);
    var stepfade = function() {
      if (audio) {
        if (audio.volume < 0.03) {
          kill(key)();
        } else {
          if (audio.volume > 0.2) {
            audio.volume = audio.volume * 0.95;
          } else {
            audio.volume = audio.volume - 0.01;
          }
        }
      }
    };
    return function() {
      clearInterval(intervals[key]);
      intervals[key] = setInterval(stepfade, 5);
    };
  };

  /* Bring a key to an immediate halt. */
  
  function kill(key)
  {
    var audio = sound(key);
    return function()
    {
      //debugger;
      clearInterval(intervals[key]);
      if (audio) {
        audio.pause();
      }
      if (key.length > 2) {
        $(pianoClass(key)).animate({
          'backgroundColor': 'black'
        }, 100, 'easeOutExpo');
      } else {
        $(pianoClass(key)).animate({
          'backgroundColor': 'white'
        }, 100, 'easeOutExpo');
      }
    };
  };

  /* Simulate a gentle release, as opposed to hard stop. */
  
 // var fadeout = true;

  /* Sustain pedal, toggled by user. */
  
  var sustaining = false;

  /* Register mouse event callbacks. */
  
  keys.forEach(function(key) {
    $(pianoClass(key)).mousedown(function()
    {
      if (playing)
      {
        return;
      }
      $(pianoClass(key)).animate({
        'backgroundColor': '#FF0000'
      }, 0);
      press(key);
      validateKey(key);
    });

      $(pianoClass(key)).mouseup(function() {
        depressed[key] = false;
        if (!sustaining) {
          fade(key)();
        }
      });
    
  });

  /* Register keyboard event callbacks. */
  
  $(document).keydown(function(event)
  {
    if (playing || activeTab!=1)
    {
      return;
    }
    if (event.which === pedal) {
      sustaining = true;
      $(pianoClass('pedal')).addClass('piano-sustain');
    }
    var key = keys[codes.indexOf(event.which)];
    press(keydown(event.which));
    validateKey(key);
  });

  function validateKey(key)
  {
    var statusDiv = document.getElementById("piano-status-melody");
    if (playedNotes.length==notes.length)
    {
      statusDiv.innerHTML ="Congratulations, you did it!";
      progress.completePiano();
      var playButton = document.getElementById("piano-play-button");
      playButton.disabled =true;
    }
    else
    {
      if (key==notes[playedNotes.length].key)
      {
        playedNotes.push(key);
        statusDiv.innerHTML ="Your doing fine, keep it up!";
      }
      else
      {
        playedNotes=[];
        statusDiv.innerHTML ="You made a mistake. Start over.";
      }
      if (playedNotes.length==notes.length)
      {
        statusDiv.innerHTML ="Congratulation, you did it!";
        progress.completePiano();
        var playButton = document.getElementById("piano-play-button");
        playButton.disabled =true;
      }
    }
  }
  
  $(document).keyup(function(event)
  {
    if (event.which === pedal) {
      sustaining = false;
      $(pianoClass('pedal')).removeClass('piano-sustain');
      Object.keys(depressed).forEach(function(key) {
        if (!depressed[key]) {  
            fade(key)();
        }
      });
    }
    if (keyup(event.which)) {
      depressed[keyup(event.which)] = false;
      if (!sustaining) {
          fade(keyup(event.which))();
      }
    }
  });


  var playedNotes = [];
  var playing=false;
  function playMelody()
  {
    if (playing)
    {
      return;
    }
    playNotes(notes);
    playedNotes =[];
  }

  return{
    playMelody: playMelody
  }

})();
