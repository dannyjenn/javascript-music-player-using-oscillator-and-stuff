  ==============================================================================
  ====    Read me                                                           ====
  ==============================================================================

- This is a JavaScript program that I wrote, which plays music (it does this
  using an OscillatorNode object to generate the tones).

- Music data is kept in a a set of JavaScript arrays, in the song.js file.
  (This program does not play MIDI, but it's basically the same idea. Or
  actually, it's probably closer to the way chiptunes work.)  Currently you need
  to input the music data by hand, which is a very tedious process.  I actually
  do it in a spreadsheet. You need to make sure all six arrays "line up", or
  else there will be problems.

- As for settng things up, you basically just need to put all the files in the
  same directory.  The two HTML files are examples of how this is done.  The
  JavaScript files are dependent upon one another, so they need to be added in
  the correct order.  (Look in the HTML files to see how it's supposed to be.)

  If you don't want sheet music then you actually only need constants.js,
  functions.js, song.js, and music_player.js.

  But if you do want the sheet music, you will also need music_style.css, 
  sheet_music.js, and the two font files: musiqwik.ttf and musiquikb.ttf

- I did not make the musical notation font.

- Everything else is my work, and in the public domain.

- Demo: https://pacobell15.neocities.org/music/other/demo/demo_sheet_music
        https://pacobell15.neocities.org/music/other/demo/demo_music_player

  Wednesday, January 3, 2024 at 2:47 PM


  ==============================================================================
  ==== Stuff that I still need to do                                        ====
  ==============================================================================

- I am not a musician and I do not understand time signatures or how they relate
  to tempo, so I am not sure if I programmed the tempo correctly.  I think it
  sounds fine though.

- Sharps and flats do not work outside the key.  This will need to be fixed.
  However, sharps and flats can be used freely if the key is set to UNKNOWN.

- Double sharps, double flats, and naturals don't work at all.  I will fix this.

- LEGATO works, but STACCATO doesn't.  (I haven't programmed it yet.)  Also, I'm
  not a musician so I am not sure if my LEGATO actually is legato or if I've
  mixed up the terminology.  My "LEGATO" basically joins two notes together, and
  this is represented in the sheet music by an arc between those notes.

- Sometimes the sheet music will have some small gaps in the staff (for example,
  see the demo file demo_sheet_music.htm)  I am not going to bother to fix this.

- Also, there is no easy way to join together the beams on the eightht and
  sixteenth notes, so I am leaving them disconnected.

- If a note falls outside the range of the G staff, it cannot be displayed on
  the sheet music.  (You can still hear it though.)  This cannot be fixed unless
  I decide to add more staves.  (Not my original intention, but I might do it.)

- This is really only designed to support a single "voice", but I might add more
  voices at some point.

- The "bars" need to be added manually.  Use the vertical bar for that, in the
  text (place it after the word).

- I've used JavaScript's "delete" keyword twice in music_player.js, but I hear
  I'm not supposed to do it that way.  I will need to look into that.

- This might just be the nature of HTML/JavaScript, but I don't really like
  that some of my scripts depend on other scripts but there's no way to make
  sure the earlier scripts are parsed first.  I suppose I could just combine
  them all into one big JavaScript file, but I wanted it to be more modular.
  Maybe I'll combine them but just keep the song.js file separate.

- I may eventually write a program to make it easier to input the music data.
  This will probably be a necessity if I ever add multiple voices.
