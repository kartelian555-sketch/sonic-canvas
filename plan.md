# Music Streaming Site Plan

Build a fully functional music streaming frontend that consumes the Supabase backend.

## 1. Project Setup
- Configure Supabase client in `src/lib/supabase.ts`.
- Set up TanStack Query for data fetching.
- Configure Tailwind with a dark, modern music streaming theme.

## 2. Image Generation
- Generate high-quality placeholder images:
  - Album covers (various genres: Afrobeats, Amapiano, Hip Hop, Jazz).
  - Artist profiles.
  - Hero banner for discovery.

## 3. UI Components (src/components)
- **Sidebar**: Main navigation (Home, Search, Library) + Playlist section.
- **Player**: Bottom persistent player with play/pause, skip, volume, and progress bar.
- **TrackTable**: Reusable list of tracks for albums and playlists.
- **MediaCard**: Card component for albums and artists.
- **SectionHeader**: Clean headings with "See all" links.

## 4. Pages (src/pages)
- **Home**: Featured releases, popular genres, and "Made for you" sections.
- **Search**: Search bar with category chips and results.
- **Library**: User's liked songs and created playlists.
- **AlbumDetail**: Album info, tracklist, and artist link.
- **ArtistDetail**: Artist bio, top tracks, and discography.

## 5. State Management & Hooks
- `useAudioPlayer`: Custom hook to manage HTML5 Audio state, playback, and progress.
- `useSupabase`: Hooks for fetching tracks, albums, and playlists.
- `useAuth`: Basic auth state (mocked or real depending on session).

## 6. Refinement
- Responsive design: Mobile bottom nav, desktop sidebar.
- Smooth transitions using Framer Motion.
- Toast notifications for actions like "Added to Playlist".
