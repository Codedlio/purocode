"use client";
import React, { useState, useEffect } from "react";

const AudioPlayer = ({ playlist }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);

  const audioRef = React.createRef();

  useEffect(() => {
    const audio = audioRef.current;

    audio.volume = volume;
    audio.currentTime = currentTime;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrackIndex, volume, currentTime]);

  const playPauseHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrackHandler = () => {
    if (currentTrackIndex < playlist.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
  };

  const prevTrackHandler = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  const updateTimeHandler = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex items-center justify-between">
      <audio
        ref={audioRef}
        src={playlist[currentTrackIndex].url}
        onTimeUpdate={updateTimeHandler}
      />
      <div className="flex items-center gap-4">
        <button
          onClick={prevTrackHandler}
          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
        >
          Anterior
        </button>
        <button
          onClick={playPauseHandler}
          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
        >
          {isPlaying ? "Pausa" : "Play"}
        </button>
        <button
          onClick={nextTrackHandler}
          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
        >
          Siguiente
        </button>
      </div>
      <input
        type="range"
        value={currentTime}
        min="0"
        max={audioRef.current ? audioRef.current.duration : 0}
        step="1"
        onChange={(e) => setCurrentTime(e.target.value)}
        className="w-1/3"
      />
      <input
        type="range"
        value={volume}
        min="0"
        max="1"
        step="0.01"
        onChange={(e) => setVolume(e.target.value)}
        className="w-1/6"
      />
    </div>
  );
};

export default AudioPlayer;
