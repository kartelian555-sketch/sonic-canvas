import React, { useState } from 'react';
import { MOCK_ALBUMS, MOCK_TRACKS, Track } from '@/lib/mock-data';
import { Play, Clock3, Search as SearchIcon, Heart, Disc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface HomeProps {
  onPlayTrack: (track: Track) => void;
  currentTrackId?: string;
  isPlaying: boolean;
}

export default function Home({ onPlayTrack, currentTrackId, isPlaying }: HomeProps) {
  return (
    <div className="flex-1 overflow-y-auto pb-32">
      {/* Hero Banner */}
      <div className="relative h-80 w-full overflow-hidden mb-8 group">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/25fc5fd4-dca2-4d4b-8538-64122c08a2f6/hero-banner-1bc9f401-1776386033520.webp" 
          alt="Hero"
          className="w-full h-full object-cover brightness-[0.4] transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-4 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Featured Release</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight">Love, Damini</h1>
          <p className="text-lg text-muted-foreground line-clamp-2">
            The legendary Burna Boy returns with his sixth studio album. A masterpiece blending Afrobeats, Pop, and Soul.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
              <Play className="mr-2 h-5 w-5 fill-current" />
              Play Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
              Save to Library
            </Button>
          </div>
        </div>
      </div>

      <div className="px-8 space-y-12">
        {/* Recommended Albums */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">New Releases</h2>
              <p className="text-sm text-muted-foreground">Fresh tracks from your favorite artists</p>
            </div>
            <Link to="/search" className="text-sm font-semibold text-primary hover:underline transition-all">See all</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {MOCK_ALBUMS.map((album) => (
              <div 
                key={album.id} 
                className="group bg-card hover:bg-accent/10 p-4 rounded-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-border"
              >
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg shadow-xl">
                  <img src={album.cover_url} alt={album.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button 
                      size="icon" 
                      className="w-12 h-12 rounded-full scale-90 group-hover:scale-100 transition-transform shadow-2xl"
                      onClick={() => {
                        const track = MOCK_TRACKS.find(t => t.album_id === album.id);
                        if (track) onPlayTrack(track);
                      }}
                    >
                      <Play className="fill-current ml-1" />
                    </Button>
                  </div>
                </div>
                <h3 className="font-bold truncate text-sm mb-1">{album.title}</h3>
                <p className="text-xs text-muted-foreground truncate">{album.artist_name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Tracks */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Trending Now</h2>
              <p className="text-sm text-muted-foreground">Most played tracks this week</p>
            </div>
          </div>
          <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-[48px_1fr_1fr_48px] px-6 py-3 border-b border-border text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
              <span>#</span>
              <span>Title</span>
              <span>Album</span>
              <span className="flex justify-center"><Clock3 className="w-4 h-4" /></span>
            </div>
            <div className="flex flex-col">
              {MOCK_TRACKS.map((track, i) => (
                <div 
                  key={track.id}
                  onClick={() => onPlayTrack(track)}
                  className={cn(
                    "grid grid-cols-[48px_1fr_1fr_48px] px-6 py-3 items-center hover:bg-white/5 cursor-pointer group transition-colors",
                    currentTrackId === track.id && "bg-primary/10"
                  )}
                >
                  <div className="relative flex items-center justify-center">
                    <span className={cn(
                      "text-sm font-medium text-muted-foreground group-hover:opacity-0 transition-opacity",
                      currentTrackId === track.id && "text-primary opacity-0"
                    )}>
                      {i + 1}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className={cn(
                        "w-4 h-4 hidden group-hover:block fill-current", 
                        currentTrackId === track.id ? "text-primary block" : "text-white"
                      )} />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 overflow-hidden">
                    <img src={track.cover_url} alt="" className="w-10 h-10 rounded-md object-cover shadow-md" />
                    <div className="flex flex-col overflow-hidden">
                      <span className={cn(
                        "font-semibold text-sm truncate",
                        currentTrackId === track.id ? "text-primary" : "text-foreground"
                      )}>{track.title}</span>
                      <span className="text-xs text-muted-foreground truncate hover:underline hover:text-foreground cursor-pointer transition-colors">{track.artist_name}</span>
                    </div>
                  </div>

                  <span className="text-sm text-muted-foreground truncate hover:text-foreground cursor-pointer transition-colors">{track.album_title}</span>
                  
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}