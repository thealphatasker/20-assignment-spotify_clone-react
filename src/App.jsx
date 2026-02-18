import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
  <div>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
      integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    {/* <link rel="stylesheet" href="./style.css" /> */}


    <title>The Spotify</title>


    {/* <!-- NavBar --> */}

    <nav>
      <div className="left-half">
        <div className="logo"><i className="fa-brands fa-spotify"></i></div>
        <div className="home-icon"><i className="fa-solid fa-house"></i></div>
        <div className="search-bar">
          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            type="text"
            className="input-box"
            placeholder="What do you want to play?"
          />
          <div className="browse"><i className="fa-solid fa-folder-open"></i></div>
        </div>
      </div>
      <div className="right-half">
        <div className="right-half-p1">
          <p className="nav-text">Premium</p>
          <p className="nav-text">Support</p>
          <p className="nav-text">Download</p>
        </div>
        <div className="right-half-p2">
          <div className="nav-text">
            <i className="fa-regular fa-circle-down"></i> Install App
          </div>
          <div className="nav-text">Sign up</div>
          <button className="login-btn">Log in</button>
        </div>
      </div>
    </nav>

    {/* <!-- Main - left part --> */}


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

      {/* <!-- Main: Right Part --> */}

      <div className="main-right-part">
        <div className="music-section">
          <h2>Popular Songs</h2>

          <div className="songs">
            <div className="music-card">
              <img src="/Images/1.png" alt="" />
              <div className="music-play-btn">
                <i id="1" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">Perfect</div>
              <div className="img-description">Ed Sheeran</div>
            </div>

            <div className="music-card">
              <img src="/Images/2.png" alt="" />
              <div className="music-play-btn">
                <i id="2" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">Shivers</div>
              <div className="img-description">Ed Sheeran</div>
            </div>

            <div className="music-card">
              <img src="/Images/3.png" alt="" />
              <div className="music-play-btn">
                <i id="3" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">Runaway</div>
              <div className="img-description">Aurora</div>
            </div>

            <div className="music-card">
              <img src="/Images/4.png" alt="" />
              <div className="music-play-btn">
                <i id="4" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">Daylight</div>
              <div className="img-description">David Kushner</div>
            </div>

            <div className="music-card">
              <img src="/Images/5.png" alt="" />
              <div className="music-play-btn">
                <i id="5" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">Die With A Smile</div>
              <div className="img-description">Bruno Mars, Lady Gaga</div>
            </div>

            <div className="music-card">
              <img src="/Images/6.png" alt="" />
              <div className="music-play-btn">
                <i id="6" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">Mystical Magical</div>
              <div className="img-description">Benson Boone</div>
            </div>

            <div className="music-card">
              <img src="/Images/7.png" alt="" />
              <div className="music-play-btn">
                <i id="7" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">A Thousand Years</div>
              <div className="img-description">Christina Perri</div>
            </div>

            <div className="music-card">
              <img src="/Images/8.png" alt="" />
              <div className="music-play-btn">
                <i id="8" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">I Don't Care</div>
              <div className="img-description">Ed Sheeran & Justin Bieber</div>
            </div>

            <div className="music-card">
              <img src="/Images/9.png" alt="" />
              <div className="music-play-btn">
                <i id="9" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">Beautiful Things</div>
              <div className="img-description">Benson Boone</div>
            </div>
          </div>
        </div>

        <div className="music-section">
          <h2>Recomended Songs</h2>
          <div className="songs">
            <div className="music-card">
              <img src="/Images/10.png" alt="" />
              <div className="music-play-btn">
                <i id="10" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">The Rest</div>
              <div className="img-description">Dean Lewis, Sasha Alex Sloan</div>
            </div>

            <div className="music-card">
              <img src="/Images/11.png" alt="" />
              <div className="music-play-btn">
                <i id="11" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">More Than You Know</div>
              <div className="img-description">Axwell /\ Ingrosso</div>
            </div>

            <div className="music-card">
              <img src="/Images/12.png" alt="" />
              <div className="music-play-btn">
                <i id="12" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">All That We Could Have Been</div>
              <div className="img-description">Alex Sampson</div>
            </div>

            <div className="music-card">
              <img src="/Images/13.png" alt="" />
              <div className="music-play-btn">
                <i id="13" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">Hurts So Good</div>
              <div className="img-description">Astrid S</div>
            </div>

            <div className="music-card">
              <img src="/Images/14.png" alt="" />
              <div className="music-play-btn">
                <i id="14" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">On My Way</div>
              <div className="img-description">Alan Walker</div>
            </div>

            <div className="music-card">
              <img src="/Images/15.png" alt="" />
              <div className="music-play-btn">
                <i id="15" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">I Do</div>
              <div className="img-description">Astrid S</div>
            </div>

            <div className="music-card">
              <img src="/Images/16.png" alt="" />
              <div className="music-play-btn">
                <i id="16" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">Control</div>
              <div className="img-description">Alan Walker</div>
            </div>

            <div className="music-card">
              <img src="/Images/17.png" alt="" />
              <div className="music-play-btn">
                <i id="17" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">Ordinary</div>
              <div className="img-description">Alex Warren</div>
            </div>

            <div className="music-card">
              <img src="/Images/18.png" alt="" />
              <div className="music-play-btn">
                <i id="18" className="playMusic fa-solid fa-circle-play"></i>
              </div>
              <div className="img-title">Man On The Moon</div>
              <div className="img-description">Alan Walker x Benjamin Ingrosso</div>
            </div>
          </div>
        </div>
      </div>
    </div>


    
    {/* <!-- PLAYER --> */}
    <div className="player-bar">
      <div className="now-bar">
        <img src="/Images/2.png" alt="" />
        <div>
          <div className="img-title-info">The Title 1</div>
          <div className="img-des-info">The Description of music</div>
        </div>
      </div>

      <div className="music-controller">
        <div className="player">
          <div>
            <i id="shuffle" className="player-btns fa-solid fa-shuffle"></i>
          </div>
          <div>
            <i id="backward" className="player-btns fa-solid fa-backward-step"></i>
          </div>
          <div>
            <i id="play" className="player-btns fa-solid fa-circle-play"></i>
          </div>
          <div>
            <i id="forward" className="player-btns fa-solid fa-forward-step"></i>
          </div>
          <div><i id="repeat" className="player-btns fa-solid fa-repeat"></i></div>
        </div>

        <div>
          <input type="range" id="progressBar" defaultValue="0" />
        </div>
      </div>
      <div></div>
    </div>
    
    </div>
  );
}

export default App;
