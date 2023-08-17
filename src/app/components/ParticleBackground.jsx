import React, { useCallback } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../(config)/particlesConfig";
const ParticleBackground = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return <Particles init={particlesInit} options={particlesConfig} />;
};
export default ParticleBackground;
