import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Track } from '@/lib/mock-data';

interface AudioPlayerProps {
  track: Track | null;
  isPlaying: boolean;
  progress: number;
  duration: number;
  volume: number;
  onTogglePlay: () => void;
  onSeek: (val: number) => void;
  onVolumeChange: (val: number) => void;
}

export function AudioPlayer({
  track,
  isPlaying,
  progress,
  duration,
  volume,
  onTogglePlay,
  onSeek,
  onVolumeChange
}: AudioPlayerProps) {
  if (!track) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-background/95 backdrop-blur-md border-t border-border px-4 py-2 flex items-center justify-between z-50">
      {/* Track Info */}
      <div className="flex items-center gap-4 w-1/3">
        <img 
          src={track.cover_url} 
          alt={track.title} 
          className="w-14 h-14 rounded-md object-cover shadow-lg"
        />
        <div className="flex flex-col overflow-hidden">
          <span className="font-semibold text-sm truncate">{track.title}</span>
          <span className="text-xs text-muted-foreground truncate">{track.artist_name}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-2 w-1/3 max-w-md">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Shuffle className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <SkipBack className="w-5 h-5 fill-current" />
          </Button>
          <Button 
            variant="secondary" 
            size="icon" 
            className="w-10 h-10 rounded-full"
            onClick={onTogglePlay}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
          </Button>
          <Button variant="ghost" size="icon">
            <SkipForward className="w-5 h-5 fill-current" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Repeat className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2 w-full">
          <span className="text-[10px] text-muted-foreground w-8 text-right">{formatTime(progress)}</span>
          <Slider
            value={[progress]}
            max={duration || 100}
            step={1}
            onValueChange={(val) => onSeek(val[0])}
            className="flex-1"
          />
          <span className="text-[10px] text-muted-foreground w-8">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Volume */}
      <div className="flex items-center justify-end gap-3 w-1/3">
        <Volume2 className="w-4 h-4 text-muted-foreground" />
        <Slider
          value={[volume * 100]}
          max={100}
          step={1}
          onValueChange={(val) => onVolumeChange(val[0] / 100)}
          className="w-24"
        />
      </div>
    </div>
  );
}