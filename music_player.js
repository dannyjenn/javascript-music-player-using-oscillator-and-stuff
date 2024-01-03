// This is the code which will play back the melody.

// The first thing to do is to set up the sawtooth oscillator

var aContext = new window.AudioContext();
var voice1 = aContext.createOscillator();
var gain = aContext.createGain();
gain.connect(aContext.destination);
voice1.connect(gain);
voice1.type = "sawtooth";

// some variables:
var is_playing = false;
var play_button_has_ever_been_clicked = false;
var foo; // foo is what plays the music (it gets set in the play function)

var display_sheet_music = false; //

// Then we also need a play function and a stop function.
// It would also be nice to have a pause function, but I didn't make one.

function play(){

    // Maybe I just don't understand how the oscillator works, but it seems you can only
    // start it a single time and you cannot start it back up after stopping it.  It also
    // seems that it can only be started after the user interact with the page in some way.
    // So as a workaround, I'm putting it in the play function and am using a variable
    // to check whether this is the first time the play function has been called.  (If
    // so, start the oscillator.  Otherwise, don't start it, because it'll give an error.)
    if(play_button_has_ever_been_clicked==false){
        voice1.frequency.value = 0;
        gain.gain.value = 0;
        voice1.start();
        play_button_has_ever_been_clicked = true;
    }

    document.getElementById("play_button").disabled = true;
    document.getElementById("stop_button").disabled = false;

    if(is_playing==false){
        is_playing = true;

        if(display_sheet_music){
            // highlight the sheet music at the beginning
            document.getElementById("id_0").style.backgroundColor = "yellow";
        }

        // each note will be triggered in sequence by a series of alarms corresponding
        // to the note durations (and lengthening the note if it is dotted).
        alarm = [];
        for(i=0;i<durations.length;i+=1){
            alarm[i] = Math.ceil(durations[i]*dots[i]);
        }

        // set the osciallor's frequency according to the current note and octave
        base_frequency = base_frequencies[scale[notes[0]]];
        voice1.frequency.value = base_frequency*Math.pow(2,octaves[0]);
        duration = alarm[0];

        // Apparently the oscillator takes a little time to get going.
        // Since JavaScript doesn't have a sleep function, we will need to do this:
        // (from https://www.sitepoint.com/delay-sleep-pause-wait/ )
        milliseconds = 500;
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
        //
        gain.gain.value = FULL_VOLUME;

        // Here begins the code to play each note in sequence
        index = 0; // start at the beginning
        foo = setInterval(function(){
            if(index<alarm.length){ // if we haven't yet reached the end of the song
                alarm[index] -= 1; // continue the countdown
                if(alarm[index]<(duration/2) && articulation[index]!=LEGATO){
                    gain.gain.value *= .9; // fade out the note (unless it's ligated)
                }

                if(alarm[index]==0){ // if the countdown has hit zero
                                     //     then it's time to move on to the next note
                    if(display_sheet_music){
                        // unhighlight the sheet music
                        document.getElementById("id_"+index).style.backgroundColor = "transparent";
                    }
                    index += 1; // go to the next note
                    if(display_sheet_music){
                        // highlight the sheet music
                        if(index<words.length){
                            document.getElementById("id_"+index).style.backgroundColor = "yellow";
                        }
                    }

                    // if we han't yet reached the end of the song, start playing the next note
                    if(index<alarm.length){
                        base_frequency = base_frequencies[scale[notes[index]]];
                        voice1.frequency.value = base_frequency*Math.pow(2,octaves[index]);
                        duration = alarm[index];
                        gain.gain.value = FULL_VOLUME;
                    }
                    else{ // otherwise we'll either loop or else we'll stop playing it
                        if(LOOP){
                            index = 0;
                            for(i=0;i<durations.length;i+=1){
                                alarm[i] = Math.ceil(durations[i]*dots[i]);
                            }
                            base_frequency = base_frequencies[scale[notes[0]]];
                            voice1.frequency.value = base_frequency*Math.pow(2,octaves[0]);
                            duration = alarm[index];
                            gain.gain.value = FULL_VOLUME;
                            if(display_sheet_music){
                                document.getElementById("id_"+index).style.backgroundColor = "yellow";
                            }
                        }
                        else{
                            stop();
                        }
                    }
                }
            }
        },(1000/(tempo/60))/QUARTER);
    }
}

function stop(){

    // See note in the play function.  It seems we cannot stop the oscillator, so
    // our stop function will simply change the frequency and volume to 0 so that we
    // can no longer hear it.

    if(display_sheet_music){
        // unhighlight the sheet music
        if(index<words.length){
            document.getElementById("id_"+index).style.backgroundColor = "transparent";
        }
    }

    // set the playhead back to the beginning
    index = 0;

    delete alarm; // we no longer need the alarm array

    // stop the oscillator
    voice1.frequency.value = 0;
    gain.gain.value = 0;

    document.getElementById("play_button").disabled = false;
    document.getElementById("stop_button").disabled = true;

    is_playing = false;
    clearInterval(foo); // stop the loop
    delete foo;
}