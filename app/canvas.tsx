"use client";
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Box } from "@react-three/drei";
import { Model } from "./model";
import * as THREE from "three";

export default function Experience() {
  const [play, setPlay] = useState(false);
  const [moveValue, setMoveValue] = useState(15);
  const [countIn, setCountIn] = useState(0);
  const [countOut, setCountOut] = useState(0);

  const handlePlay = () => {
    setPlay(!play);
  };

  // ✅ Update counts when moveValue changes
  useEffect(() => {
    if (!play) return; // only check when playing

    if (moveValue > 14.9) {
      setCountIn(0);
      setCountOut(0);
    } else if (moveValue < 8 && moveValue > 7) {
      setCountIn(1);
    } else if (moveValue < 7 && moveValue > 6) {
      setCountIn(2);
    } else if (moveValue < 6 && moveValue > 5) {
      setCountIn(3);
    } else if (moveValue < 5 && moveValue > 4) {
      setCountIn(4);
    } else if (moveValue < 3 && moveValue > 2) {
      setCountIn(5);
    } else if (moveValue < 2 && moveValue > 1) {
      setCountIn(6);
    } else if (moveValue < 1 && moveValue > 0) {
      setCountIn(7);
    } else if (moveValue < 0 && moveValue > -1) {
      setCountIn(8);
    } else if (moveValue < -51 && moveValue > -52) {
      setCountOut(1);
    } else if (moveValue < -52 && moveValue > -53) {
      setCountOut(2);
    } else if (moveValue < -53 && moveValue > -54) {
      setCountOut(3);
    } else if (moveValue < -54 && moveValue > -55) {
      setCountOut(4);
    } else if (moveValue < -55 && moveValue > -56) {
      setCountOut(5);
    } else if (moveValue < -56 && moveValue > -57) {
      setCountOut(6);
    } else if (moveValue < -57 && moveValue > -58) {
      setCountOut(7);
    } else if (moveValue < -58 && moveValue > -59) {
      setCountOut(8);
    }
  }, [moveValue, play, countIn, countOut]);


  return (
    <div className="w-full h-full relative flex flex-col">
      {/* 🎥 Canvas Section */}
      <div className="h-2/3">
        <Canvas camera={{ position: [30, 10, 10], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />

          {/* 🚂 Model with move feedback */}
          <Model play={play} onMoveChange={setMoveValue} />

          {/* Boxes */}
          <Box scale={[5, 7, 0.2]} position={[0, 3, 10]}>
            <meshBasicMaterial
              color={new THREE.Color("#00FF00")}
              transparent
              opacity={0.3}
            />
          </Box>
          <Box scale={[5, 7, 0.2]} position={[0, 3, -50]}>
            <meshBasicMaterial
              color={new THREE.Color("#FF0000")}
              transparent
              opacity={0.3}
            />
          </Box>

          <OrbitControls enableDamping />
          <Environment preset="sunset" />
        </Canvas>
      </div>

      {/* ⚙️ Control Section */}
      <div className="h-1/3 flex flex-col items-center justify-center gap-4 text-white">
        <button
          onClick={handlePlay}
          className="bg-white/10 backdrop-blur-md border border-white/30 px-6 py-2 rounded-xl hover:bg-white/20 transition"
        >
          {play ? "⏸ Pause Simulation" : "▶ Play Simulation"}
        </button>

        {/* 📊 Count Display */}
        <div className="flex gap-8 text-lg">
          <div className="flex flex-col items-center">
            <span className="text-gray-300">Count In</span>
            <span className="text-2xl font-bold text-green-400">{countIn}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-300">Count Out</span>
            <span className="text-2xl font-bold text-red-400">{countOut}</span>
          </div>
        </div>
        <div>
          <span className="text-xl text-gray-300">Section :</span>
          <span
            className={`text-xl font-bold mr-12 ${
              countOut - countIn ? "text-red-500" : "text-green-500"
            }`}
          >
            {countOut - countIn ? "Occupied" : "Clear"}
          </span>
          <span className="text-xl text-gray-300">Matched :</span>
          <span
            className={`text-xl font-bold ${
              countOut - countIn ? "text-red-500" : "text-green-500"
            }`}
          >
            {countOut - countIn ? "Pending" : "Yes"}
          </span>
        </div>
      </div>
    </div>
  );
}
