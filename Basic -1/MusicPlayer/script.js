//accessing the various elements in the html such as playlist song list, play button and the pause button
const playlistSongs = document.getElementById('playlist-songs');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

//accessing the various elements in the html such as next button, previous button and the shuffle button
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const shuffleButton = document.getElementById('shuffle');

//array to store all songs from the json
const allSongs = [
    {
        id: 0,
        title: "Scratching The Surface",
        artist: "Quincy Larson",
        duration: "4:25",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
    },
    {
        id: 1,
        title: "Can't Stay Down",
        artist: "Quincy Larson",
        duration: "4:15",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
    },
    {
        id: 2,
        title: "Still Learning",
        artist: "Quincy Larson",
        duration: "3:51",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
    },
    {
        id: 3,
        title: "Cruising for a Musing",
        artist: "Quincy Larson",
        duration: "3:34",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3",
      },
      {
        id: 4,
        title: "Never Not Favored",
        artist: "Quincy Larson",
        duration: "3:35",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3",
      },
      {
        id: 5,
        title: "From the Ground Up",
        artist: "Quincy Larson",
        duration: "3:12",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/from-the-ground-up.mp3",
      },
      {
        id: 6,
        title: "Walking on Air",
        artist: "Quincy Larson",
        duration: "3:25",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/walking-on-air.mp3",
      },
      {
        id: 7,
        title: "Can't Stop Me. Can't Even Slow Me Down.",
        artist: "Quincy Larson",
        duration: "3:52",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3",
      },
      {
        id: 8,
        title: "The Surest Way Out is Through",
        artist: "Quincy Larson",
        duration: "3:10",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3",
      },
      {
        id: 9,
        title: "Chasing That Feeling",
        artist: "Quincy Larson",
        duration: "2:43",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3",
      },
];

//array to stor songs (new set)
/* const allSongs = [
    {
      id: 0,
      title: "Hello World",
      artist: "Rafael",
      duration: "0:23",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/hello-world.mp3",
    },
    {
      id: 1,
      title: "In the Zone",
      artist: "Rafael",
      duration: "0:11",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/in-the-zone.mp3",
    },
    {
      id: 2,
      title: "Camper Cat",
      artist: "Rafael",
      duration: "0:21",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/camper-cat.mp3",
    },
    {
      id: 3,
      title: "Electronic",
      artist: "Rafael",
      duration: "0:15",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/electronic.mp3",
    },
    {
      id: 4,
      title: "Sailing Away",
      artist: "Rafael",
      duration: "0:22",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/sailing-away.mp3",
    },
  ]; */

//use Web Audio API to play; creating a new instance of Audio and assigning it to audio variable
const audio = new Audio();

//we will keep track of the songs, the current song playing and the time of the current song
let userData = {
    //using the spread operator, we will create a duplicate of the allSong array inside userData object and store in songs
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0
};

//create a function for play functionality
const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id)
    audio.src = song.src;
    audio.title = song.title;
    if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
        audio.currentTime = 0;
    } else {
        audio.currentTime = userData?.songCurrentTime;
    }
    //update the current song being played
    userData.currentSong = song;

    //change the play button look to show active
    playButton.classList.add("playing");

    //calling highlightCurrentSong function to highlight the current song
    highlightCurrentSong();

    //calling setPlayerDisplay() to ensure that the display panel shows current info when song is played
    setPlayerDisplay();

    //calling setPlayButtonAccessibleText() to ensure that the play button has correct accessible text
    setPlayButtonAccessibleText();

    //call the play() method of audio 
    audio.play();
}

//create a function for pause functionality
const pauseSong = () => {
    //testing
    // console.log("pause");
    //assign userData.songCurrentTime the value of audio.currentTime
    userData.songCurrentTime = audio.currentTime;
    //remove the active color css from playButton
    playButton.classList.remove("playing");
    //use pause() from audio to pause the playing audio
    audio.pause();
}

//function for play next song; nextbutton functionality
const playNextSong = () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    } else {
        const currentSongIndex = getCurrentSongIndex();
        const nextSong = userData?.songs[currentSongIndex +  1];
        playSong(nextSong.id);
    }
}

//function for play previous song; previousbutton functionality
const playPreviousSong = () => {
    if (userData?.currentSong === null) {
        return
    } else {
        const currentSongIndex = getCurrentSongIndex();
        const previousSong = userData?.songs[currentSongIndex - 1];
        playSong(previousSong.id);
    }
}

//function for the shuffle functionality: shuffleButton functionality
const shuffle = () =>{
    userData?.songs.sort(() => Math.random() - 0.5);
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    renderSongs(userData?.songs);
    pauseSong();
    setPlayerDisplay();
    setPlayButtonAccessibleText();
}

//function for the delete button
const deleteSong = (id) =>{
    if (userData?.currentSong?.id === id){
        userData.currentSong = null;
        userData.songCurrentTime = 0;
        pauseSong();
        setPlayerDisplay();
    }

    userData.songs = userData?.songs.filter((song) => song.id !== id);
    renderSongs(userData?.songs);
    highlightCurrentSong();
    setPlayButtonAccessibleText();

    if (userData?.songs.length === 0){
        const resetButton = document.createElement('button');
        const resetText = document.createTextNode("Reset playlist");
        resetButton.id = "reset";
        resetButton.ariaLabel = "Reset Playlist";
        resetButton.appendChild(resetText);
        playlistSongs.appendChild(resetButton);
        resetButton.addEventListener("click", () =>{
            userData.songs = [...allSongs];
            renderSongs(sortSongs());
            setPlayButtonAccessibleText();
            resetButton.remove();
        });
    }
}

//function to display current song info in the player display
const setPlayerDisplay = () => {
    const playingSong = document.getElementById('player-song-title');
    const songArtist = document.getElementById('player-song-artist');
    const currentTitle = userData?.currentSong?.title;
    const currentArtist = userData?.currentSong?.artist;
    playingSong.textContent = currentTitle ? currentTitle : "";
    songArtist.textContent = currentArtist ? currentArtist : "";
}

//function to highlight any song being played
const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll('.playlist-song');
    const songToHighlight = document.getElementById(`song-${userData?.currentSong?.id}`)
    playlistSongElements.forEach((songEl) => {
        songEl.removeAttribute('aria-current');
    });
    if (songToHighlight) {
        songToHighlight.setAttribute("aria-current", "true");
    }
}

// creating an arrow fucntion to render  the playlist
const renderSongs = (array) => {
    //creating a variable songsHTML and assigning it aaray.map()
    const songsHTML = array.map((song) => {
        return `
        <li id="song-${song.id}" class="playlist-song">
        <button class="playlist-song-info" onclick="playSong(${song.id})">
        <span class="playlist-song-title">${song.title}</span>
        <span class="playlist-song-artist">${song.artist}</span>
        <span class="playlist-song-duration">${song.duration}</span>
        </button>
        <button class="playlist-song-delete" aria-label="Delete ${song.title}" onclick="deleteSong(${song.id})">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
        </li>
        `;
    }).join("");
    playlistSongs.innerHTML = songsHTML;
}

//function to make play button accessibility friendly
const setPlayButtonAccessibleText = () => {
    const song = userData?.currentSong || userData?.songs[0];
    playButton.setAttribute("aria-label", song?.title ? `Play ${song.title}` : "Play")
}

//function to get current song's index
const getCurrentSongIndex = () => {
    return userData?.songs.indexOf(userData?.currentSong);
}

//event listener to confirm when a song ends
audio.addEventListener("ended", () => {
    const currentSongIndex = getCurrentSongIndex();
    // const nextSongExists = userData.songs.length - 1 > currentSongIndex;
    const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;
    if (nextSongExists) {
        playNextSong();
    } else {
        userData.currentSong = null;
        userData.songCurrentTime = 0;
        pauseSong();
        setPlayerDisplay();
        highlightCurrentSong();
        setPlayButtonAccessibleText();
    }
  });

// function to sort songs
const sortSongs = () => {
    userData?.songs.sort((a,b) => {
        if (a.title < b.title) {
            return -1;
        }

        if (a.title > b.title) {
            return 1;
        }

        return 0;
    });
    return userData?.songs;
}


//using the addEventListener for the play button
playButton.addEventListener('click', ()=>{
    if (!userData?.currentSong) {
        playSong(userData?.songs[0].id);
    } else {
        playSong(userData?.currentSong.id);
    }
});

//using the addEventListener for the pause button
pauseButton.addEventListener("click", pauseSong);

//using the addEventListener for the nextSong button
nextButton.addEventListener("click", playNextSong);

//using the addEventListener for the previousSong button
previousButton.addEventListener("click", playPreviousSong);

//using the addEventListener for the shuffle button
shuffleButton.addEventListener("click", shuffle);

//we need function to play, shuffle, pause, next and previous actions
renderSongs(sortSongs());



/* 
EXAMPLES OF HOW ARROW FUNCTIONS ARE CREATED AND USED
//create a function printGreeting, sample 
const printGreeting = () =>{
    console.log("Hello there!")
  }
  printGreeting() //call the greeting function
  
  //printMessage function
  const printMessage = org => {
    console.log(`${org} is awesome!`);
  }

  printMessage("freeCodeCamp");

  //addTwoNumber function
  const addTwoNumber = (num1, num2) => {
    return num1 + num2;
  }

  //refactoring addTwoNumbers function
  const addTwoNumbers = (num1, num2) => num1 + num2;

  console.log(addTwoNumbers(3,4)); */

