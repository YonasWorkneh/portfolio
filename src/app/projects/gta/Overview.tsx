import React from "react";

export default function Overview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div>
          <h1 className="text-white text-xl font-tenor mb-2">My Role</h1>
          <p>
            <span className="text-white font-tenor">Lead Frontend &mdash;</span>
            <span className="text-sm text-white/40">
              {" "}
              visual design and implementation.
            </span>
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-tenor text-white text-xl">Overview</h1>
        <p className="text-white/40 font-tenor py-4">
          GTA VI is Rockstar Games’ highly anticipated open-world
          action-adventure video game, designed to push the boundaries of
          realism, scale, and storytelling. Built with cutting-edge game engine
          technology, it delivers a visually stunning and immersive experience,
          featuring dynamic weather, lifelike AI, and seamless cityscapes. The
          game’s narrative weaves together crime, culture, and chaos in a richly
          detailed world, with expansive character development and interactive
          missions.My task was to develop an advertisement website for GTA VI—a
          title with massive anticipation and global reach. The goal was to
          create a visually striking, immersive experience that reflects the
          scale, energy, and innovation of the game itself. This meant designing
          bold, cinematic visuals paired with smooth animations and interactive
          elements to capture the essence of GTA VI’s world.{" "}
        </p>
      </div>
    </div>
  );
}
