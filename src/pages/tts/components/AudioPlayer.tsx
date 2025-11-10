import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, RotateCcw } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioUrl]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const time = parseFloat(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const vol = parseFloat(e.target.value);
    audio.volume = vol;
    setVolume(vol);
  };

  const resetAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
      <audio ref={audioRef} src={audioUrl} />

      <div className="flex items-center gap-6 mb-6">
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg"
        >
          {isPlaying ? (
            <Pause className="h-7 w-7" />
          ) : (
            <Play className="h-7 w-7 ml-1" />
          )}
        </button>

        <button
          onClick={resetAudio}
          className="flex items-center justify-center w-12 h-12 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-800 rounded-full transition-all duration-200 transform hover:scale-110 shadow-md border border-gray-200"
        >
          <RotateCcw className="h-5 w-5" />
        </button>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-medium text-gray-700">{formatTime(currentTime)}</span>
            <span className="text-sm text-gray-400">/</span>
            <span className="text-sm font-medium text-gray-700">{formatTime(duration)}</span>
          </div>

          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            step="0.01"
            onChange={handleSeek}
            className="w-full h-1 rounded-full cursor-pointer slider"
            style={{
              '--slider-progress': `${Math.round(currentTime / duration * 100)}%`
            } as React.CSSProperties}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Volume2 className="h-5 w-5 text-gray-600" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="flex-1 h-1 rounded-full cursor-pointer slider"
            style={{
              '--slider-progress': `${volume * 100}%`,
              '--slider-from-color': '#E5E7EB',
              '--slider-to-color': '#E5E7EB'
            } as React.CSSProperties}
        />
        <span className="text-sm font-medium text-gray-700 w-10">
          {Math.round(volume * 100)}%
        </span>
      </div>
    </div>
  );
};

export default AudioPlayer;