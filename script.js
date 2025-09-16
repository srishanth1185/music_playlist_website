const playlist = [
  {
    title: "Chuttamalle",
    album: "Devara OST",
    file: "music/Chuttamalle.mp3",
    cover: "images/chuttamalle.jpg"
  },
  {
    title: "Brown Rang",
    album: "Brown Rang Album",
    file: "music/Brown Rang.mp3",
    cover: "images/brown rang.jpg"
  },
  {
    title: "Sanam Re",
    album: "Sanam Re OST",
    file: "music/sanam re.mp3",
    cover: "images/Sanam-Re.jpg"
  },
  {
    title: "Chahun Main Ya Naa",
    album: "Aashiqui 2 OST",
    file: "music/Chahun Main Ya Naa.mp3",
    cover: "images/aashiqui 2.jpg"
  },
  {
    title: "Pehle Bhi Main",
    album: "Aashiqui 2 OST",
    file: "music/Pehle Bhi Main.mp3",
    cover: "images/animal.jpg"
  },
  {
    title: "Khairiyat",
    album: "Chhichhore OST",
    file: "music/Khairiyat.mp3",
    cover: "images/chhichhore.jpg"
  },
  {
    title: "Perfect",
    album: "Divide OST",
    file: "music/Perfect.mp3",
    cover: "images/perfect.jpg"
  },
  {
    title: "Sahiba",
    album: "Shershaah OST",
    file: "music/Sahiba.mp3",
    cover: "images/Sahiba.jpg"
  }
];

let currentIndex = 0;
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const nowPlaying = document.getElementById("now-playing");
const albumName = document.getElementById("album-name");
const playlistContainer = document.getElementById("playlist");
const searchInput = document.getElementById("search");

// Render horizontal playlist
playlist.forEach((song, index) => {
  let div = document.createElement("div");
  div.classList.add("song");
  div.innerHTML = `
    <img src="${song.cover}" alt="${song.title}" class="thumb">
    <span class="song-title">${song.title}</span>
    <span class="song-album">${song.album}</span>
  `;
  div.addEventListener("click", () => playSong(index));
  playlistContainer.appendChild(div);
});

function playSong(index) {
  currentIndex = index;
  const song = playlist[index];
  audio.src = song.file;
  cover.src = song.cover;
  nowPlaying.textContent = "Now Playing: " + song.title;
  albumName.textContent = "Album: " + song.album;
  audio.play();

  document.querySelectorAll(".song").forEach((el) => el.classList.remove("active"));
  playlistContainer.children[index].classList.add("active");
}

// Controls
document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  playSong(currentIndex);
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  playSong(currentIndex);
});

document.getElementById("play-pause").addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Search bar filter
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  document.querySelectorAll(".song").forEach((el, index) => {
    const title = playlist[index].title.toLowerCase();
    const album = playlist[index].album.toLowerCase();
    el.style.display = (title.includes(query) || album.includes(query)) ? "flex" : "none";
  });
});



