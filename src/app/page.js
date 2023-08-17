"use client";
import Player from "./components/Player";
import { songsdata } from "./audio/songs";
import { useRef, useState, useEffect } from "react";
import Navbar from "./components/NavBar";
const Home = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);
  const [showPlayer, setShowPlayer] = useState(false);

  const togglePlayer = () => {
    setShowPlayer(!showPlayer);
  };
  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  return (
    <div className="home">
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <Navbar togglePlayer={togglePlayer} />
      <Player
        songs={songs}
        setSongs={setSongs}
        isplaying={isplaying}
        setisplaying={setisplaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        showPlayer={showPlayer}
        togglePlayer={togglePlayer}
      />
    </div>
  );
};
export default Home;
