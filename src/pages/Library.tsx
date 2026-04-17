import React from 'react';
import { MOCK_ALBUMS, MOCK_TRACKS, Track } from '@/lib/mock-data';
import { Heart, Plus, Play, MoreHorizontal, Clock3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LibraryProps {
  onPlayTrack: (track: Track) => void;
  currentTrackId?: string;
}

export default function Library({ onPlayTrack, currentTrackId }: LibraryProps) {
  const likedTracks = MOCK_TRACKS.slice(0, 3);

  return (
    <div className="flex-1 overflow-y-auto pb-32">
      <div className="p-8 pb-4 flex items-center justify-between">
        <h1 className="text-4xl font-extrabold tracking-tight">Your Library</h1>
        <Button size="icon" variant="ghost" className="rounded-full">
          <Plus className="w-6 h-6" />
        </Button>
      </div>

      <div className="px-8 space-y-12">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Liked Songs Tile */}
            <div className="col-span-1 md:col-span-2 relative h-64 rounded-xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-400 p-8 flex flex-col justify-end group cursor-pointer overflow-hidden shadow-2xl">
              <Heart className="absolute top-8 right-8 w-12 h-12 text-white/40 group-hover:scale-110 transition-transform" />
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white">Liked Songs</h2>
                <p className="text-indigo-100 font-medium">{likedTracks.length} songs</p>
              </div>
              <Button size="icon" className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <Play className="fill-current ml-1" />
              </Button>
            </div>

            {/* Other Playlists Placeholder */}
            {MOCK_ALBUMS.slice(0, 1).map(album => (
              <div key={album.id} className="bg-card hover:bg-accent/10 p-4 rounded-xl transition-all duration-300 cursor-pointer border border-border group relative">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg shadow-lg">
                  <img src={album.cover_url} alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold truncate text-sm mb-1">{album.genre} Essentials</h3>
                <p className="text-xs text-muted-foreground">Playlist • VibeMusic</p>
                <Button size="icon" className="absolute bottom-20 right-8 w-12 h-12 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  <Play className="fill-current ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recently Liked</h2>
          </div>
          <div className="bg-card/30 rounded-xl border border-border overflow-hidden">
             {likedTracks.map((track, i) => (
                <div 
                  key={track.id}
                  onClick={() => onPlayTrack(track)}
                  className={cn(
                    "flex items-center gap-4 px-6 py-4 hover:bg-white/5 cursor-pointer group transition-colors",
                    currentTrackId === track.id && "bg-primary/10"
                  )}
                >
                  <span className="text-sm font-medium text-muted-foreground w-4 text-center">{i + 1}</span>
                  <img src={track.cover_url} alt="" className="w-12 h-12 rounded-md object-cover shadow-lg" />
                  <div className="flex flex-col overflow-hidden">
                    <span className={cn("font-semibold text-sm truncate", currentTrackId === track.id && "text-primary")}>
                      {track.title}
                    </span>
                    <span className="text-xs text-muted-foreground truncate">{track.artist_name}</span>
                  </div>
                  <span className="ml-auto text-xs text-muted-foreground tabular-nums">
                    {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
                  </span>
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-primary">
                    <Heart className="w-4 h-4 fill-current" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}