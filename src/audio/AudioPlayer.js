// node_modules imports
import React, { useRef, useState, useEffect } from "react";
// Style imports
import "./AudioPlayer.sass";

const AudioPlayer = ({ src }) => {
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const updatePlaying = (e) => {
    setIsPlaying(e.type !== "pause");
  };

  const onTimeupdate = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  const onCanPlayThrough = (e) => {
    setDuration(e.target.duration);
  };

  useEffect(() => {
    audio.src = src;
    audio.loop = true;
  }, [src]);

  useEffect(() => {
    audio.onplay = updatePlaying;
    audio.onpause = updatePlaying;
    audio.onchange = updatePlaying;
    audio.oncanplaythrough = onCanPlayThrough;
    audio.ontimeupdate = onTimeupdate;
  }, [audio]);

  const cx = 0;
  const cy = 0;
  const r = 50;
  const range = currentTime / duration;
  const startX = cx + r;
  const startY = cy;
  const endX = cx + r + r * Math.sin(range * Math.PI * 2.0);
  const endY = cy + r - r * Math.cos(range * Math.PI * 2.0);
  const way = range >= 0.5 ? 1 : 0;
  const sweep = range > 0 || range === 1.0 ? 1 : 0;
  const left = currentTime / duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="audio-player">
      <svg width={140} height={140}>
        <g
          stroke="var(--color-curacao)"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          transform="translate(20, 20)"
        >
          <circle
            cx={cx + r}
            cy={cy + r}
            r={r}
            fill="none"
            strokeWidth="2"
            stroke="var(--color-ultradark)"
          />
          <path
            d={`M ${startX} ${startY} A ${r} ${r} 0 ${way} ${sweep} ${endX} ${endY}`}
          />
          <polygon
            className="play"
            style={{ cursor: "pointer" }}
            transform={`translate(${cx + r / 2},${cy + r / 2})`}
            points={
              isPlaying
                ? "12.5,12.5 37.5,12.5 37.5,37.5 12.5,37.5"
                : "14.5,5 45,25 45,25 14.5,45"
            }
            fill="var(--color-curacao)"
            stroke="none"
            onClick={(e) => {
              audio.paused ? audio.play() : audio.pause();
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default AudioPlayer;
