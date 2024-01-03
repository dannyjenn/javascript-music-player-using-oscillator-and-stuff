// This is the code that displays the sheet music.
// This is entirely dependent upon the MusiQwik font.

display_sheet_music = true;

var section = document.getElementById("section");
section.innerHTML = "";

var x;
var y;
var z;

// clef
x = document.createElement("SPAN");
x.id = "id_clef";
x.className="syllable";
y = document.createElement("SPAN");
y.className="music";
y.innerHTML = "'=&=";
z = document.createElement("SPAN");
z.className="word";
z.innerHTML = "&nbsp;";
if(tone!=UNKNOWN){
    z.innerHTML += "("+tone+")";
}
x.append(y);
x.append(z);
section.append(x);

// key signature
if(key!=UNKNOWN){
    x = document.createElement("SPAN");
    x.id = "id_key";
    x.className="syllable";
    y = document.createElement("SPAN");
    y.className="music";
    y.innerHTML = "=" + key + "=";
    z = document.createElement("SPAN");
    z.className="word";
    z.innerHTML = "&nbsp;";
    x.append(y);
    x.append(z);
    section.append(x);
}

// time signature
if(time!=UNKNOWN){
    x = document.createElement("SPAN");
    x.id = "id_time";
    x.className="syllable";
    y = document.createElement("SPAN");
    y.className="music";
    y.innerHTML = "=" + time + "=";
    z = document.createElement("SPAN");
    z.className="word";
    z.innerHTML = "&nbsp;";
    x.append(y);
    x.append(z);
    section.append(x);
}

// notes and words
for(j=0;j<words.length;j+=1){
    var x = document.createElement("SPAN");
    x.id = "id_"+j;
    x.className="syllable";
    var y = document.createElement("SPAN");
    y.className="music";
    if(j<notes.length){
        y.innerHTML = "==";
        if(durations[j]==QUARTER){
            if(notes[j]==REST){
                y.innerHTML += ":";
            }
            else if(octaves[j]==4){
                switch(notes[j]){
                    case C:
                        y.innerHTML += "R";
                        break;
                    case D:
                        y.innerHTML += "S";
                        break;
                    case E:
                        y.innerHTML += "T";
                        break;
                    case F:
                        y.innerHTML += "U";
                        break;
                    case G:
                        y.innerHTML += "V";
                        break;
                    case A:
                        y.innerHTML += "W";
                        break;
                    case B:
                        y.innerHTML += "_";
                        break;
                }
            }
            else if(octaves[j]==3){
                switch(notes[j]){
                    case A:
                        y.innerHTML += "P";
                        break;
                    case B:
                        y.innerHTML += "Q";
                        break;
                }
            }
            else if(octaves[j]==5){
                switch(notes[j]){
                    case C:
                        y.innerHTML += "Y";
                        break;
                    case D:
                        y.innerHTML += "Z";
                        break;
                    case E:
                        y.innerHTML += "[";
                        break;
                    case F:
                        y.innerHTML += "\\";
                        break;
                    case G:
                        y.innerHTML += "]";
                        break;
                    case A:
                        y.innerHTML += "^";
                        break;
                }
            }
        }
        else if(durations[j]==HALF){
            if(notes[j]==REST){
                y.innerHTML += ";";
            }
            else if(octaves[j]==4){
                switch(notes[j]){
                    case C:
                        y.innerHTML += "b";
                        break;
                    case D:
                        y.innerHTML += "c";
                        break;
                    case E:
                        y.innerHTML += "d";
                        break;
                    case F:
                        y.innerHTML += "e";
                        break;
                    case G:
                        y.innerHTML += "f";
                        break;
                    case A:
                        y.innerHTML += "g";
                        break;
                    case B:
                        y.innerHTML += "o";
                        break;
                }
            }
            else if(octaves[j]==3){
                switch(notes[j]){
                    case A:
                        y.innerHTML += "`";
                        break;
                    case B:
                        y.innerHTML += "a";
                        break;
                }
            }
        else if(octaves[j]==5){
                switch(notes[j]){
                    case C:
                        y.innerHTML += "i";
                        break;
                    case D:
                        y.innerHTML += "j";
                        break;
                    case E:
                        y.innerHTML += "k";
                        break;
                    case F:
                        y.innerHTML += "l";
                        break;
                    case G:
                        y.innerHTML += "m";
                        break;
                    case A:
                        y.innerHTML += "n";
                        break;
                }
            }
        }
        else if(durations[j]==WHOLE){
            if(notes[j]==REST){
                y.innerHTML += "<";
            }
            else if(octaves[j]==4){
                switch(notes[j]){
                    case C:
                        y.innerHTML += "r";
                        break;
                    case D:
                        y.innerHTML += "s";
                        break;
                    case E:
                        y.innerHTML += "t";
                        break;
                    case F:
                        y.innerHTML += "u";
                        break;
                    case G:
                        y.innerHTML += "v";
                        break;
                    case A:
                        y.innerHTML += "w";
                        break;
                    case B:
                        y.innerHTML += "x";
                        break;
                }
            }
            else if(octaves[j]==3){
                switch(notes[j]){
                    case A:
                        y.innerHTML += "p";
                        break;
                    case B:
                        y.innerHTML += "q";
                        break;
                }
            }
            else if(octaves[j]==5){
                switch(notes[j]){
                    case C:
                        y.innerHTML += "y";
                        break;
                    case D:
                        y.innerHTML += "z";
                        break;
                    case E:
                        y.innerHTML += "{";
                        break;
                    case F:
                        y.innerHTML += "|";
                        break;
                    case G:
                        y.innerHTML += "}";
                        break;
                    case A:
                        y.innerHTML += "~";
                        break;
                }
            }
        }
        else if(durations[j]==EIGHTH){
            if(notes[j]==REST){
                y.innerHTML += "9";
            }
            else if(octaves[j]==4){
                switch(notes[j]){
                    case C:
                        y.innerHTML += "B";
                        break;
                    case D:
                        y.innerHTML += "C";
                        break;
                    case E:
                        y.innerHTML += "D";
                        break;
                    case F:
                        y.innerHTML += "E";
                        break;
                    case G:
                        y.innerHTML += "F";
                        break;
                    case A:
                        y.innerHTML += "G";
                        break;
                    case B:
                        y.innerHTML += "O";
                        break;
                }
            }
            else if(octaves[j]==3){
                switch(notes[j]){
                    case A:
                        y.innerHTML += "@";
                        break;
                    case B:
                        y.innerHTML += "A";
                        break;
                }
            }
            else if(octaves[j]==5){
                switch(notes[j]){
                    case C:
                        y.innerHTML += "I";
                        break;
                    case D:
                        y.innerHTML += "J";
                        break;
                    case E:
                        y.innerHTML += "K";
                        break;
                    case F:
                        y.innerHTML += "L";
                        break;
                    case G:
                        y.innerHTML += "M";
                        break;
                    case A:
                        y.innerHTML += "N";
                        break;
                }
            }
        }
        else if(durations[j]==SIXTEENTH){
            y.innerHTML += "<b>";
            if(notes[j]==REST){
                y.innerHTML += "9";
            }
            else if(octaves[j]==4){
                switch(notes[j]){
                    case C:
                        y.innerHTML += "B";
                        break;
                    case D:
                        y.innerHTML += "C";
                        break;
                    case E:
                        y.innerHTML += "D";
                        break;
                    case F:
                        y.innerHTML += "E";
                        break;
                    case G:
                        y.innerHTML += "F";
                        break;
                    case A:
                        y.innerHTML += "G";
                        break;
                    case B:
                        y.innerHTML += "O";
                        break;
                }
            }
            else if(octaves[j]==3){
                switch(notes[j]){
                    case A:
                        y.innerHTML += "@";
                        break;
                    case B:
                        y.innerHTML += "A";
                        break;
                }
            }
            else if(octaves[j]==5){
                switch(notes[j]){
                    case C:
                        y.innerHTML += "I";
                        break;
                    case D:
                        y.innerHTML += "J";
                        break;
                    case E:
                        y.innerHTML += "K";
                        break;
                    case F:
                        y.innerHTML += "L";
                        break;
                    case G:
                        y.innerHTML += "M";
                        break;
                    case A:
                        y.innerHTML += "N";
                        break;
                }
            }
            y.innerHTML += "</b>";
        }
        
        if(dots[j]==DOTTED){
            if(octaves[j]==4){
                switch(notes[j]){
                    case C:
                        y.innerHTML += "²";
                        break;
                    case D:
                        y.innerHTML += "³";
                        break;
                    case E:
                        y.innerHTML += "´";
                        break;
                    case F:
                        y.innerHTML += "µ";
                        break;
                    case G:
                        y.innerHTML += "¶";
                        break;
                    case A:
                        y.innerHTML += "·";
                        break;
                    case B:
                        y.innerHTML += "¸";
                        break;
                }
            }
            else if(octaves[j]==3){
                switch(notes[j]){
                    case A:
                        y.innerHTML += "°";
                        break;
                    case B:
                        y.innerHTML += "±";
                        break;
                }
            }
            else if(octaves[j]==5){
                switch(notes[j]){
                    case C:
                        y.innerHTML += "¹";
                        break;
                    case D:
                        y.innerHTML += "º";
                        break;
                    case E:
                        y.innerHTML += "»";
                        break;
                    case F:
                        y.innerHTML += "¼";
                        break;
                    case G:
                        y.innerHTML += "½";
                        break;
                    case A:
                        y.innerHTML += "¾";
                        break;
                }
            }
        }
        else{
            y.innerHTML += "=";
        }
        if(articulation[j]==LEGATO){
            y.innerHTML += ",";
        }
        y.innerHTML += "=";
    }
    else{
        y.innerHTML = "=====";
    }
    var z = document.createElement("SPAN");
    z.className="word";
    var word = words[j];
    if(word.includes("|")){
        word = word.replaceAll("|","");
        y.innerHTML += "=!";
    }
    if(word=="" || word=="|"){
        word = "&nbsp;" + word;
    }
    z.innerHTML = word;
    x.append(y);
    x.append(z);
    section.append(x);
}
x = document.createElement("SPAN");
x.id = "id_end";
x.className="syllable";
y = document.createElement("SPAN");
y.className="music";
y.innerHTML = "!";
z = document.createElement("SPAN");
z.className="word";
z.innerHTML = "&nbsp;";
x.append(y);
x.append(z);
section.append(x);