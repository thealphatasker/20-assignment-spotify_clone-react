import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import Header from "./Components/Header.jsx";

const songs = [
  {
    id: 1,
    title: "Perfect",
    artist: "Ed Sheeran",
    img: "/Images/1.png",
    src: "Audio/1.flac",
    category: "popular",
  },
  {
    id: 2,
    title: "Shivers",
    artist: "Ed Sheeran",
    img: "Images/2.png",
    src: "Audio/2.flac",
    category: "popular",
  },
  {
    id: 3,
    title: "Runaway",
    artist: "Aurora",
    img: "Images/3.png",
    src: "Audio/3.flac",
    category: "popular",
  },
  {
    id: 4,
    title: "Daylight",
    artist: "David Kushner",
    img: "Images/4.png",
    src: "Audio/4.flac",
    category: "popular",
  },
  {
    id: 5,
    title: "Die With A Smile",
    artist: "Bruno Mars, Lady Gaga",
    img: "Images/5.png",
    src: "Audio/5.flac",
    category: "popular",
  },
  {
    id: 6,
    title: "Mystical Magical",
    artist: "Benson Boone",
    img: "Images/6.png",
    src: "Audio/6.flac",
    category: "popular",
  },
  {
    id: 7,
    title: "A Thousand Years",
    artist: "Christina Perri",
    img: "Images/7.png",
    src: "Audio/7.flac",
    category: "popular",
  },
  {
    id: 8,
    title: "I Don't Care",
    artist: "Ed Sheeran & Justin Bieber",
    img: "Images/8.png",
    src: "Audio/8.flac",
    category: "popular",
  },
  {
    id: 9,
    title: "Beautiful Things",
    artist: "Benson Boone",
    img: "Images/9.png",
    src: "Audio/9.flac",
    category: "popular",
  },
  {
    id: 10,
    title: "The Rest",
    artist: "Dean Lewis, Sasha Alex Sloan",
    img: "Images/10.png",
    src: "Audio/10.flac",
    category: "recommended",
  },
  {
    id: 11,
    title: "More Than You Know",
    artist: "Axwell / Ingrosso",
    img: "Images/11.png",
    src: "Audio/11.flac",
    category: "recommended",
  },
  {
    id: 12,
    title: "All That We Could Have Been",
    artist: "Alex Sampson",
    img: "Images/12.png",
    src: "Audio/12.flac",
    category: "recommended",
  },
  {
    id: 13,
    title: "Hurts So Good",
    artist: "Astrid S",
    img: "Images/13.png",
    src: "Audio/13.flac",
    category: "recommended",
  },
  {
    id: 14,
    title: "On My Way",
    artist: "Alan Walker",
    img: "Images/14.png",
    src: "Audio/14.flac",
    category: "recommended",
  },
  {
    id: 15,
    title: "I Do",
    artist: "Astrid S",
    img: "Images/15.png",
    src: "Audio/15.flac",
    category: "recommended",
  },
  {
    id: 16,
    title: "Control",
    artist: "Alan Walker",
    img: "Images/16.png",
    src: "Audio/16.flac",
    category: "recommended",
  },
  {
    id: 17,
    title: "Ordinary",
    artist: "Alex Warren",
    img: "Images/17.png",
    src: "Audio/17.flac",
    category: "recommended",
  },
  {
    id: 18,
    title: "Man On The Moon",
    artist: "Alan Walker x Benjamin Ingrosso",
    img: "Images/18.png",
    src: "Audio/18.flac",
    category: "recommended",
  },
];

function App() {
  const [currentSong, setCurrentSong] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [songOnShuffle, setSongOnShuffle] = useState(false);
  const [songOnRepeat, setSongOnRepeat] = useState(false);

  const audioRef = useRef(new Audio(songs[0].src));

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    const handleEnded = () => {
      if (songOnRepeat) {
        audio.currentTime = 0;
        audio.play();
      } else {
        playNextSong();
      }
    };
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [songOnRepeat, currentSong, songOnShuffle]);

  const playPause = () => {
    const audio = audioRef.current;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const playSong = (id) => {
    setCurrentSong(id);
    const audio = audioRef.current;
    audio.src = songs[id - 1].src;
    audio.currentTime = 0;
    audio.play();
    setIsPlaying(true);
  };

  const getRandomSong = () => Math.floor(Math.random() * songs.length) + 1;

  const playNextSong = () => {
    const next = songOnShuffle
      ? getRandomSong()
      : currentSong >= songs.length
        ? 1
        : currentSong + 1;
    playSong(next);
  };

  const playPrevSong = () => {
    const prev = songOnShuffle
      ? getRandomSong()
      : currentSong <= 1
        ? songs.length
        : currentSong - 1;
    playSong(prev);
  };

  const onProgressChange = (e) => {
    const value = e.target.value;
    setProgress(value);
    audioRef.current.currentTime = (value * audioRef.current.duration) / 100;
  };

  const toggleShuffle = () => {
    setSongOnShuffle((s) => !s);
    if (!songOnShuffle) setSongOnRepeat(false);
  };
  const toggleRepeat = () => {
    setSongOnRepeat((r) => !r);
    if (!songOnRepeat) setSongOnShuffle(false);
  };

  const current = songs[currentSong - 1];

  return (
    <div>
      {/* NavBar */}
      <Header />

      {/* Main portion */}
      <div className="main">
        <div className="main-left-part">
          <div className="library">
            <p>Your library</p>
            <div>+</div>
          </div>
          <div className="box-container">
            <div className="box">
              <h4>Create your first playlist</h4>
              <p>It's easy we'll help you</p>
              <button>Create playlist</button>
            </div>
            <div className="box">
              <h4>Let's find some podcast to follow</h4>
              <p>We'll keep you updated on new updates</p>
              <button>Browse Podcasts</button>
            </div>
          </div>
        </div>

        {/* songs grid */}
        <div className="main-right-part">
          {/* popular section */}
          <div className="music-section">
            <h2>Popular Songs</h2>
            <div className="songs">
              {songs
                .filter((s) => s.category === "popular")
                .map((song) => (
                  <div key={song.id} className="music-card">
                    <img src={song.img} alt="" />
                    <div className="music-play-btn">
                      <i
                        onClick={() => playSong(song.id)}
                        className={`playMusic fa-solid ${
                          isPlaying && currentSong === song.id
                            ? "fa-circle-pause"
                            : "fa-circle-play"
                        }`}
                      />
                    </div>
                    <div className="img-title">{song.title}</div>
                    <div className="img-description">{song.artist}</div>
                  </div>
                ))}
            </div>
          </div>

          {/* recommended section */}
          <div className="music-section">
            <h2>Recommended Songs</h2>
            <div className="songs">
              {songs
                .filter((s) => s.category === "recommended")
                .map((song) => (
                  <div key={song.id} className="music-card">
                    <img src={song.img} alt="" />
                    <div className="music-play-btn">
                      <i
                        onClick={() => playSong(song.id)}
                        className={`playMusic fa-solid ${
                          isPlaying && currentSong === song.id
                            ? "fa-circle-pause"
                            : "fa-circle-play"
                        }`}
                      />
                    </div>
                    <div className="img-title">{song.title}</div>
                    <div className="img-description">{song.artist}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* player at bottom */}
      <div className="player-bar">
        <div className="now-bar">
          <img src={current.img} alt="cover" />
          <div>
            <div className="img-title-info">{current.title}</div>
            <div className="img-des-info">{current.artist}</div>
          </div>
        </div>

        <div className="music-controller">
          <div className="player">
            <i
              id="shuffle"
              onClick={toggleShuffle}
              className={`player-btns fa-solid fa-shuffle ${
                songOnShuffle ? "active" : ""
              }`}
            />
            <i
              id="backward"
              onClick={playPrevSong}
              className="player-btns fa-solid fa-backward-step"
            />
            <i
              id="play"
              onClick={playPause}
              className={`player-btns fa-solid ${
                isPlaying ? "fa-circle-pause" : "fa-circle-play"
              }`}
            />
            <i
              id="forward"
              onClick={playNextSong}
              className="player-btns fa-solid fa-forward-step"
            />
            <i
              id="repeat"
              onClick={toggleRepeat}
              className={`player-btns fa-solid fa-repeat ${
                songOnRepeat ? "active" : ""
              }`}
            />
          </div>

          <input
            type="range"
            id="progressBar"
            value={progress}
            onChange={onProgressChange}
            style={{
              background: `linear-gradient(to right, #177200ff ${progress}% , #333 ${progress}%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
