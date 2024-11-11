// // Sample songs data
// const songs = [
//     { title: "Song 1", artist: "Artist 1", src: "Idhuvum-Kadandhu-Pogum-(The-Healing-Song)-MassTamilan.fm.mp3", cover:"",lyrics: "Lyrics for Song 1..." },
//     { title: "Song 2", artist: "Artist 2", src: "Nallavannu-Solvanga.mp3", cover:"33482-removebg-preview.png",lyrics: "Lyrics for Song 2..." },
//     { title: "Song 3", artist: "Artist 3", src: "Seval Kodi.mp3", cover:"", lyrics: "Lyrics for Song 3..." }
// ];

// let songIndex = 0;
// let isPlaying = false;
// let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// const audio = document.getElementById('audio');
// const playBtn = document.getElementById('play');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');
// const favoriteBtn = document.getElementById('favorite');
// const playlistEl = document.getElementById('playlist');
// const favoritesListEl = document.getElementById('favorites-list');

// function loadSong(song) {
//     document.getElementById('song-title').textContent = song.title;
//     document.getElementById('artist-name').textContent = song.artist;
//     audio.src = song.src;
// }

// // -----------------------------------------------------

// // // Select the volume input element
// // const volumeSlider = document.getElementById('volume');
// // const audio1 = document.getElementById('audio');

// // // Set the initial volume to 50%
// // audio.volume = 0.5;
// // volumeSlider.value = audio.volume;

// // // Function to update the volume when the slider changes
// // volumeSlider.addEventListener('input', () => {
// //     audio.volume = volumeSlider.value;
// // });


// function playPause() {
//     if (isPlaying) {
//         audio.pause();
//         playBtn.textContent = '▶️';
//     } else {
//         audio.play();
//         playBtn.textContent = '⏸️';
//     }
//     isPlaying = !isPlaying;
// }

// function nextSong() {
//     songIndex = (songIndex + 1) % songs.length;
//     loadSong(songs[songIndex]);
//     playPause();
// }

// function prevSong() {
//     songIndex = (songIndex - 1 + songs.length) % songs.length;
//     loadSong(songs[songIndex]);
//     playPause();
// }

// // Toggle favorite song
// function toggleFavorite() {
//     const currentSong = songs[songIndex];
//     const isFavorited = favorites.some(song => song.title === currentSong.title);

//     if (isFavorited) {
//         favorites = favorites.filter(song => song.title !== currentSong.title);
//     } else {
//         favorites.push(currentSong);
//     }

//     // Update localStorage
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//     updateFavoritesList();
// }

// // Update favorites list UI
// function updateFavoritesList() {
//     favoritesListEl.innerHTML = favorites.map((song, index) =>
//         `<li data-index="${index}">${song.title} - ${song.artist}</li>`
//     ).join('');
// }

// // Load song from favorites list
// favoritesListEl.addEventListener('click', (e) => {
//     if (e.target.tagName === 'LI') {
//         const index = e.target.getAttribute('data-index');
//         const favoriteSong = favorites[index];
//         songIndex = songs.findIndex(song => song.title === favoriteSong.title);
//         loadSong(favoriteSong);
//         playPause();
//     }
// });

// playBtn.addEventListener('click', playPause);
// prevBtn.addEventListener('click', prevSong);
// nextBtn.addEventListener('click', nextSong);
// favoriteBtn.addEventListener('click', toggleFavorite);

// // Load initial song
// loadSong(songs[songIndex]);
// updateFavoritesList();

// // Selecting required elements
// const audio2 = document.getElementById('audio');
// const progressBar = document.getElementById('progress');
// const currentTimeEl = document.getElementById('current-time');
// const durationEl = document.getElementById('duration');

// // Load the initial song
// loadSong(songs[songIndex]);

// // Function to format time in MM:SS format
// function formatTime(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
// }

// // Update song duration once metadata is loaded
// audio.addEventListener('loadedmetadata', () => {
//     durationEl.textContent = formatTime(audio.duration);
//     progressBar.max = audio.duration;
// });

// // Update the current time and progress bar as the song plays
// audio.addEventListener('timeupdate', () => {
//     if (!isNaN(audio.currentTime)) {
//         currentTimeEl.textContent = formatTime(audio.currentTime);
//         progressBar.value = audio.currentTime;
//     }
// });

// // Seek to a new time when the user interacts with the progress bar
// progressBar.addEventListener('input', () => {
//     audio.currentTime = progressBar.value;
// });

// // Function to load the song
// function loadSong(song) {
//     document.getElementById('song-title').textContent = song.title;
//     document.getElementById('artist-name').textContent = song.artist;
//     audio.src = song.src;
//     audio.load();
//     document.getElementById('cover-image').src = song.cover ;
// }


// // --------------volume btn----
// const volumeSlider = document.getElementById('volume-slider');
// const volumeBtn = document.getElementById('volume-btn');

// // Set initial volume
// audio.volume = 0.5;

// // Update volume when the slider changes
// volumeSlider.addEventListener('input', () => {
//     audio.volume = volumeSlider.value;
//     updateVolumeIcon();
//     updateSliderColor();
// });

// // Toggle mute/unmute when clicking the volume button
// volumeBtn.addEventListener('click', () => {
//     if (audio.volume > 0) {
//         audio.volume = 0;
//         volumeSlider.value = 0;
//     } else {
//         audio.volume = 0.5;
//         volumeSlider.value = 0.5;
//     }
//     updateVolumeIcon();
//     updateSliderColor();
// });

// // Function to update the volume icon
// function updateVolumeIcon() {
//     if (audio.volume === 0) {
//         volumeBtn.textContent = '🔇'; // Muted icon
//     } else if (audio.volume < 0.5) {
//         volumeBtn.textContent = '🔉'; // Low volume icon
//     } else {
//         volumeBtn.textContent = '🔊'; // High volume icon
//     }
// }

// // Function to change the slider color based on volume
// function updateSliderColor() {
//     if (audio.volume === 0) {
//         volumeSlider.style.background = '#6c757d'; // Grey for muted
//     } else if (audio.volume < 0.5) {
//         volumeSlider.style.background = '#ffc107'; // Yellow for low volume
//     } else {
//         volumeSlider.style.background = '#28a745'; // Green for high volume
//     }
// }

// // Initialize icon and slider color on page load
// updateVolumeIcon();
// updateSliderColor();

// //----------------------------search box-------------------------------------------
// // Selecting elements
// const searchBar = document.getElementById('search-bar');
// const songListContainer = document.getElementById('song-list');

// // Function to filter songs by search query
// function searchSong() {
//     const query = searchBar.value.toLowerCase();
//     const filteredSongs = songs.filter(song => {
//         return song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query);
//     });
    
//     displaySongs(filteredSongs);
// }

// // Function to display the filtered song list
// function displaySongs(songsToDisplay) {
//     // Clear the existing song list
//     songListContainer.innerHTML = '';

//     // Add filtered songs to the song list container
//     songsToDisplay.forEach(song => {
//         const songItem = document.createElement('div');
//         songItem.classList.add('song-item');
//         songItem.innerHTML = `
//             <div class="song-title">${song.title}</div>
//             <div class="song-artist">${song.artist}</div>
//             <button class="play-button" onclick="playSong('${song.src}')">Play</button>
//         `;
//         songListContainer.appendChild(songItem);
//     });
// }

// // Function to play the selected song
// function playSong(src) {
//     audio.src = src;
//     audio.play();
//     document.getElementById('cover-image').src = song.cover ;
// }

// // Initial display of all songs
// displaySongs(songs);

const songs = [
    { title: "Idhuvum kadandhu pogum, Idhuvum kadandhu pogum..", artist: "Sid Sriram", src: "Idhuvum-Kadandhu-Pogum-(The-Healing-Song)-MassTamilan.fm.mp3", cover:"https://th.bing.com/th/id/OIP.CLJus1mG7eLOe9jVavfS_AHaHa?rs=1&pid=ImgDetMain", lyrics: "Lyrics for Song 1..." },
    { title: "Nallavannu Solvaanga Nambidathinga..", artist: "Devi Sri Prasad", src: "Nallavannu-Solvanga.mp3", cover:"https://th.bing.com/th/id/OIP.iLhbAoyetCLq3Ab_JzeEXgAAAA?w=199&h=200&c=7&r=0&o=5&dpr=1.4&pid=1.7", lyrics: "Lyrics for Song 2..." },
    { title: "Seval kodi parakkuthadaa ,Sernthu idi idikkuthadaa..", artist: "Yuvan Shankar Raja", src: "Seval Kodi.mp3", cover:"https://th.bing.com/th/id/OIP.gSxTfpRem7dUCZPu9sABFwHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7", lyrics: "Lyrics for Song 3..." },
    { title: "Azhage Azhage..", artist: "Hip Hop adhi", src: "Azhage.mp3", cover:"https://th.bing.com/th/id/OIP.GxKNZiXpL1ulsyxAiENsyQHaJQ?w=191&h=239&c=7&r=0&o=5&dpr=1.4&pid=1.7", lyrics: "Lyrics for Song 4..." },
    { title: "Yelae yelae dosthu da,Naatkkal pudhusu aachu..", artist: "Harris Jayara", src: "Yaelae-Yealae-Dhosthu-Da.mp3", cover:"https://th.bing.com/th/id/OIP.cU7F2TtVps_EMjY3Wdj-fQHaI9?w=139&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7", lyrics: "Lyrics for Song 5..." },
    { title: "Nee nathaswaram pola vanthaaa…aa..,Nee nathaswaram pola vantha..", artist: "A.R. Rahman", src: "Valayapatti-tamile.mp3", cover:"https://th.bing.com/th/id/OIP.lZ01KKHlUziFOM8sNPzyqwHaE8?w=191&h=127&c=7&r=0&o=5&dpr=1.4&pid=1.7", lyrics: "Lyrics for Song 6..." },
    { title: "Neela nilave ,.Ninavil azhake,.Thaaram arike..", artist: "Kapil Kapilan", src: "Neela-Nilave.mp3", cover:"download.jpg", lyrics: "Lyrics for Song 7..." },
    { title: "Maduraikku pogathadi, Anga malli poo kanna vekkum..", artist: "A.R. Rahman", src: "Maduraikku_Pogathadi.mp3", cover:"https://th.bing.com/th?id=OIP.WSOjqjS0g_ZHAeR7LeMoEgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2", lyrics: "Lyrics for Song 8..." },
    
];

let songIndex = 0;
let isPlaying = false;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const favoriteBtn = document.getElementById('favorite');
const playlistEl = document.getElementById('playlist');
const favoritesListEl = document.getElementById('favorites-list');
const progressBar = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume-slider');
const volumeBtn = document.getElementById('volume-btn');
const searchBar = document.getElementById('search-bar');
const songListContainer = document.getElementById('song-list');
const searchResultsContainer = document.getElementById('search-list');

// Load the initial song
loadSong(songs[songIndex]);

// Function to load song and update the UI
function loadSong(song) {
    document.getElementById('song-title').textContent = song.title;
    document.getElementById('artist-name').textContent = song.artist;
    document.getElementById('cover-image').src = song.cover;
    audio.src = song.src;
    audio.load();
}

// Play/Pause functionality
function playPause() {
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = '▶️';
    } else {
        audio.play();
        playBtn.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
}

// Next Song functionality
function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    audio.play();  // Automatically play the next song
    playBtn.textContent = '⏸️';  // Update the button to show 'pause' symbol
    isPlaying = true;  // Update the isPlaying state
}


// Previous Song functionality
function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    audio.play();  // Automatically play the next song
    playBtn.textContent = '⏸️';  // Update the button to show 'pause' symbol
    isPlaying = true;  // Update the isPlaying state
}

// Toggle favorite functionality
function toggleFavorite() {
    const currentSong = songs[songIndex];
    const isFavorited = favorites.some(song => song.title === currentSong.title);

    if (isFavorited) {
        // Remove from favorites
        favorites = favorites.filter(song => song.title !== currentSong.title);
        favoriteBtn.classList.remove('favorited');  // Remove highlight
    } else {
        // Add to favorites
        favorites.push(currentSong);
        favoriteBtn.classList.add('favorited');  // Add highlight
    }

    // Update localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesList();
}

function updateFavoriteIcon() {
    const currentSong = songs[songIndex];
    const isFavorited = favorites.some(song => song.title === currentSong.title);
    
    if (isFavorited) {
        favoriteBtn.classList.add('favorited');  // Highlight if song is a favorite
    } else {
        favoriteBtn.classList.remove('favorited');  // Normal if not a favorite
    }
}
// Favorite button event
favoriteBtn.addEventListener('click', toggleFavorite);

// Load initial song
loadSong(songs[songIndex]);
updateFavoritesList();  // Load the favorites list on start





// Update favorites list UI
function updateFavoritesList() {
    favoritesListEl.innerHTML = favorites.map((song, index) =>
        `<li data-index="${index}">${song.title} - ${song.artist}</li>`
    ).join('');
}

// Load song from favorites list
favoritesListEl.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const index = e.target.getAttribute('data-index');
        const favoriteSong = favorites[index];
        songIndex = songs.findIndex(song => song.title === favoriteSong.title);
        loadSong(favoriteSong);
        playPause();
    }
});

// Volume Slider functionality
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
    updateVolumeIcon();
    updateSliderColor();
});

// Mute/Unmute button functionality
volumeBtn.addEventListener('click', () => {
    if (audio.volume > 0) {
        audio.volume = 0;
        volumeSlider.value = 0;
    } else {
        audio.volume = 0.5;
        volumeSlider.value = 0.5;
    }
    updateVolumeIcon();
    updateSliderColor();
});

// Update volume icon based on the current volume
function updateVolumeIcon() {
    if (audio.volume === 0) {
        volumeBtn.textContent = '🔇'; // Muted icon
    } else if (audio.volume < 0.5) {
        volumeBtn.textContent = '🔉'; // Low volume icon
    } else {
        volumeBtn.textContent = '🔊'; // High volume icon
    }
}

// Change volume slider color
function updateSliderColor() {
    if (audio.volume === 0) {
        volumeSlider.style.background = '#6c757d'; // Grey for muted
    } else if (audio.volume < 0.5) {
        volumeSlider.style.background = '#ffc107'; // Yellow for low volume
    } else {
        volumeSlider.style.background = '#28a745'; // Green for high volume
    }
}

// Format time (MM:SS)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
}

// Update song duration once metadata is loaded
audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
    progressBar.max = audio.duration;
});

// Update current time and progress bar
audio.addEventListener('timeupdate', () => {
    if (!isNaN(audio.currentTime)) {
        currentTimeEl.textContent = formatTime(audio.currentTime);
        progressBar.value = audio.currentTime;
    }
});

// Seek functionality (progress bar)
progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
});

// Search functionality
function searchSong() {
    const query = searchBar.value.toLowerCase();
    const filteredSongs = songs.filter(song => {
        return song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query);
    });

     // Display songs or show "Song not found" message if no match
     if (filteredSongs.length === 0) {
        songListContainer.innerHTML = '<p style="color:red;"><b>Sorry!! Song not found</b></p>';
    } else {
        displaySongs(filteredSongs);
    }
}

// Display songs in the playlist or search results
function displaySongs(songsToDisplay) {
    songListContainer.innerHTML = '';

    songsToDisplay.forEach(song => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.innerHTML = `
            <div class="song-title">${song.title}</div>
            <div class="song-artist">${song.artist}</div>
            <button class="play-button" onclick="playSong('${song.src}')">Play</button>
        `;
        songListContainer.appendChild(songItem);
    });
}

// Play selected song from the search
function playSong(src) {
    const song = songs.find(song => song.src === src);
    loadSong(song);
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = '▶️'; // Update button to play icon
    } else {
        audio.play();
        playBtn.textContent = '⏸️'; // Update button to pause icon
    }
    isPlaying = !isPlaying;
}


// Update the favorites list
updateFavoritesList();

// Event listeners for player controls
playBtn.addEventListener('click', playPause);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
favoriteBtn.addEventListener('click', toggleFavorite);
