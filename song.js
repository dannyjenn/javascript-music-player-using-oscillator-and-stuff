// Here begins the song data.

// meta data
const title = "Happy Birthday";
const tone = UNKNOWN; // ignore this
const tempo = 120; // beats per minute
const time = _3_4; // (for display purposes only)
const key = F_MAJOR;

// define the scale
const scale = get_scale(key);

// the arrays into which the music will be loaded
var octaves = [];
var notes = [];
var durations = [];
var dots = [];
var articulation = [];
var words = [];

// Now we input the music data.
// (unfortunately this needs to be done by hand at the moment, so it is very tedious.
//     and if you accidentally omit a value, there will be problems.)

// I like to split the music up into smaller pieces, to make it easier to work with.

octaves = octaves.concat([4,4,4,4,4,4,4]);
notes = notes.concat([REST,C,C,D,C,F,E,]);
durations = durations.concat([HALF,EIGHTH,SIXTEENTH,QUARTER,QUARTER,QUARTER,HALF]);
dots = dots.concat([NORMAL,DOTTED,NORMAL,NORMAL,NORMAL,NORMAL,NORMAL]);
articulation = articulation.concat([0,0,0,0,0,0,0]);
words = words.concat(['','Hap-','py|','birth-','day','to|','you.']);

octaves = octaves.concat([4,4,4,4,4,4]);
notes = notes.concat([C,C,D,C,G,F]);
durations = durations.concat([EIGHTH,SIXTEENTH,QUARTER,QUARTER,QUARTER,HALF]);
dots = dots.concat([DOTTED,NORMAL,NORMAL,NORMAL,NORMAL,NORMAL]);
articulation = articulation.concat([0,0,0,0,0,0]);
words = words.concat(['Hap-','py|','birth-','day','to|','you.']);

octaves = octaves.concat([4,4,5,4,4,4,4]);
notes = notes.concat([C,C,C,A,F,E,D]);
durations = durations.concat([EIGHTH,SIXTEENTH,QUARTER,QUARTER,QUARTER,QUARTER,QUARTER]);
dots = dots.concat([DOTTED,NORMAL,NORMAL,NORMAL,NORMAL,NORMAL,NORMAL]);
articulation = articulation.concat([0,0,0,0,0,LEGATO,0]);
words = words.concat(['Hap-','py|','birth-','day','dear|','<i>Name_</i>','.']);

octaves = octaves.concat([4,4,4,4,4,4]);
notes = notes.concat([B,B,A,F,G,F]);
durations = durations.concat([EIGHTH,SIXTEENTH,QUARTER,QUARTER,QUARTER,HALF]);
dots = dots.concat([DOTTED,NORMAL,NORMAL,NORMAL,NORMAL,NORMAL]);
articulation = articulation.concat([0,0,0,0,0,0]);
words = words.concat(['Hap-','py|','birth-','day','to','you.|']);