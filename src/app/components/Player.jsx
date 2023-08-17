"use client";
import React, { useRef, useState } from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Player = ({
  audioElem,
  isplaying,
  setisplaying,
  currentSong,
  setCurrentSong,
  songs,
  showPlayer,
  togglePlayer,
}) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (index === 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
  };

  const skiptoNext = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);

    if (index === songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };

  return (
    <div>
      <AnimatePresence>
        {showPlayer && (
          <motion.div
            className=" backdrop-blur bg-opacity-75 player_container bg-black text-white p-4  flex flex-col justify-between fixed bottom-0 left-0 w-full "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            <div className=" backdrop-blur bg-opacity-75 player_container bg-black text-white p-4  flex flex-col justify-between fixed bottom-0 left-0 w-full ">
              <div className="title flex justify-center">
                <p>{currentSong.title}</p>
              </div>
              <div className="navigation w-full mt-2 ">
                <div
                  className="navigation_wrapper relative bg-complement2 h-1 rounded cursor-pointer overflow-hidden"
                  onClick={checkWidth}
                  ref={clickRef}
                >
                  <div className="seek_bar absolute left-0 top-0 h-full rounded"></div>
                  <div
                    className="current_seek absolute left-0 top-0 h-1 bg-primary rounded"
                    style={{ width: `${currentSong.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="controls flex items-center justify-center mt-4">
                <BsFillSkipStartCircleFill
                  className="btn_action text-2xl cursor-pointer mr-4"
                  onClick={skipBack}
                />
                {isplaying ? (
                  <BsFillPauseCircleFill
                    className="btn_action text-4xl cursor-pointer"
                    onClick={PlayPause}
                  />
                ) : (
                  <BsFillPlayCircleFill
                    className="btn_action text-4xl cursor-pointer"
                    onClick={PlayPause}
                  />
                )}
                <BsFillSkipEndCircleFill
                  className="btn_action text-2xl cursor-pointer ml-4"
                  onClick={skiptoNext}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Player;
