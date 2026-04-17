import React, { useState } from 'react';
import { MOCK_ALBUMS, MOCK_TRACKS, Track } from '@/lib/mock-data';
import { Search as SearchIcon, Play, Disc, User, Music } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SearchProps {
  onPlayTrack: (track: Track) => void;
  currentTrackId?: string;
}

export default function Search({ onPlayTrack, currentTrackId }: SearchProps) {
  const [query, setQuery] = useState('');
  
  const filteredTracks = MOCK_TRACKS.filter(t => 
    t.title.toLowerCase().includes(query.toLowerCase()) || 
    t.artist_name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto p-8 pb-32">
      <div className="max-w-2xl mb-8 sticky top-0 bg-background/80 backdrop-blur-md py-4 z-10">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for songs, artists, or albums" 
            className="pl-10 h-12 bg-accent/20 border-none rounded-full focus-visible:ring-primary"
          />
        </div>
      </div>

      <div className="space-y-8">
        {!query && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Browse All</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Afrobeats', 'Amapiano', 'Hip Hop', 'Jazz', 'Pop', 'Soul', 'Rock', 'Electronic'].map((genre, i) => (
                <div 
                  key={genre} 
                  className={cn(
                    "relative h-48 rounded-xl p-4 overflow-hidden cursor-pointer group transition-transform hover:scale-[1.02]",
                    i % 4 === 0 ? "bg-indigo-600" : i % 4 === 1 ? "bg-emerald-600" : i % 4 === 2 ? "bg-rose-600" : "bg-amber-600"
                  )}
                >
                  <h3 className="text-2xl font-bold tracking-tight">{genre}</h3>
                  <Disc className="absolute -bottom-4 -right-4 w-24 h-24 text-white/20 rotate-12 group-hover:rotate-45 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </section>
        )}

        {query && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Search Results</h2>
            <div className="flex flex-col gap-2">
              {filteredTracks.map((track) => (
                <div 
                  key={track.id}
                  onClick={() => onPlayTrack(track)}
                  className={cn(
                    "flex items-center gap-4 p-3 rounded-md hover:bg-accent/20 cursor-pointer group transition-colors",
                    currentTrackId === track.id && "bg-primary/10"
                  )}
                >
                  <div className="relative w-12 h-12 rounded-md overflow-hidden shrink-0">
                    <img src={track.cover_url} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className={cn("font-semibold text-sm truncate", currentTrackId === track.id && "text-primary")}>
                      {track.title}
                    </span>
                    <span className="text-xs text-muted-foreground">{track.artist_name}</span>
                  </div>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
                  </span>
                </div>
              ))}
              {filteredTracks.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                  <SearchIcon className="w-12 h-12 mb-4 opacity-20" />
                  <p>No results found for "{query}"</p>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}