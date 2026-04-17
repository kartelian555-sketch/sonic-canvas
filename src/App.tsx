import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from '@/components/Sidebar';
import { AudioPlayer } from '@/components/AudioPlayer';
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Library from '@/pages/Library';
import { useAudioPlayer } from '@/hooks/use-audio-player';
import { Toaster } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';

export default function App() {
  const {
    currentTrack,
    isPlaying,
    progress,
    duration,
    volume,
    playTrack,
    togglePlay,
    seek,
    updateVolume
  } = useAudioPlayer();

  return (
    <Router>
      <div className="dark">
        <div className="flex h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary/30">
          <Sidebar />
          
          <main className="flex-1 relative overflow-hidden flex flex-col bg-gradient-to-b from-background via-background to-black/20">
            {/* Header/Top Bar */}
            <div className="h-16 flex items-center px-8 bg-transparent absolute top-0 left-0 right-0 z-20">
              <div className="flex items-center gap-4">
                 <div className="flex gap-2">
                   <button className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/60 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                   </button>
                   <button className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/60 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                   </button>
                 </div>
              </div>
              <div className="ml-auto flex items-center gap-4">
                <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5 h-8 text-xs font-bold hidden md:flex">Upgrade</Button>
                <div className="flex items-center gap-2 bg-black/40 rounded-full pl-1 pr-3 py-1 hover:bg-black/60 transition-colors cursor-pointer group">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                    JD
                  </div>
                  <span className="text-xs font-semibold group-hover:text-primary transition-colors">John Doe</span>
                </div>
              </div>
            </div>

            <Routes>
              <Route 
                path="/" 
                element={
                  <Home 
                    onPlayTrack={playTrack} 
                    currentTrackId={currentTrack?.id}
                    isPlaying={isPlaying}
                  />
                } 
              />
              <Route 
                path="/search" 
                element={
                  <Search 
                    onPlayTrack={playTrack} 
                    currentTrackId={currentTrack?.id}
                  />
                } 
              />
              <Route 
                path="/library" 
                element={
                  <Library 
                    onPlayTrack={playTrack} 
                    currentTrackId={currentTrack?.id}
                  />
                } 
              />
            </Routes>
          </main>

          <AudioPlayer 
            track={currentTrack}
            isPlaying={isPlaying}
            progress={progress}
            duration={duration}
            volume={volume}
            onTogglePlay={togglePlay}
            onSeek={seek}
            onVolumeChange={updateVolume}
          />
          
          <Toaster position="top-right" theme="dark" closeButton />
        </div>
      </div>
    </Router>
  );
}