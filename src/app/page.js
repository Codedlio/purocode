import React from "react";
import AudioPlayer from "./components/AudioPlayer";

const playlist = [
  { title: "Canción 1", url: "/hap.mp3" },
  { title: "Canción 2", url: "/hap.mp3" },
  // Agrega más canciones según sea necesario
];

const Home = () => {
  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="text-3xl font-semibold mb-4">Reproductor de Música</h1>
      <AudioPlayer playlist={playlist} />
    </div>
  );
};

export default Home;
