"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { MusicVisualizer } from "./music-visualizer";
import { PlayerControls } from "./player-controls";
import { Playlist } from "./playlist";
import type { Track } from "@/types";

interface MusicPlayerProps {
  playlist: Track[];
}

export function MusicPlayer({ playlist }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array<ArrayBuffer> | null>(null);

  const setupAudioContext = () => {
    if (!audioRef.current || audioContextRef.current) return;

    const audioContext = new window.AudioContext();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audioRef.current);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray: Uint8Array<ArrayBuffer> = new Uint8Array(
      new ArrayBuffer(bufferLength),
    );

    source.connect(analyser);
    analyser.connect(audioContext.destination);

    audioContextRef.current = audioContext;
    analyserRef.current = analyser;
    dataArrayRef.current = dataArray;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      if (audioContextRef.current?.state === "suspended") {
        audioContextRef.current.resume();
      }
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const nextTrack = useCallback(() => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  }, [playlist.length]);

  const prevTrack = useCallback(() => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
  }, [playlist.length]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", nextTrack);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", nextTrack);
    };
  }, [nextTrack]);

  useEffect(() => {
    if (isPlaying && !audioContextRef.current) {
      setupAudioContext();
    }
  }, [isPlaying]);

  const MusicBackground = "/MBack.png";
  const MusicBackgroundMobile = "/MBackMobile.png";

  return (
    <Card className="relative mb-8 p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 border-4 border-pink-300 pixel-shadow overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 md:hidden"
        style={{ backgroundImage: `url(${MusicBackgroundMobile})` }}
      />

      <div
        className="pointer-events-none absolute inset-0 hidden bg-cover bg-center bg-no-repeat opacity-35 md:block"
        style={{ backgroundImage: `url(${MusicBackground})` }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row gap-6 items-center">
        <MusicVisualizer
          isPlaying={isPlaying}
          analyser={analyserRef.current}
          dataArray={dataArrayRef.current}
        />

        <PlayerControls
          currentTrack={playlist[currentTrack]}
          isPlaying={isPlaying}
          volume={volume}
          currentTime={currentTime}
          duration={duration}
          onTogglePlay={togglePlay}
          onPrevTrack={prevTrack}
          onNextTrack={nextTrack}
          onVolumeChange={handleVolumeChange}
        />

        <Playlist
          tracks={playlist}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onTrackSelect={setCurrentTrack}
        />
      </div>

      <audio
        ref={audioRef}
        src="/music/Freesia.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </Card>
  );
}
