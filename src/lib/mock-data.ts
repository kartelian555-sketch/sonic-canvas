export interface Artist {
  id: string;
  full_name: string;
  avatar_url: string;
  bio?: string;
}

export interface Track {
  id: string;
  title: string;
  artist_id: string;
  album_id: string;
  duration: number;
  file_url: string;
  track_number: number;
  artist_name: string;
  album_title: string;
  cover_url: string;
}

export interface Album {
  id: string;
  title: string;
  artist_id: string;
  artist_name: string;
  cover_url: string;
  release_date: string;
  genre: string;
}

export const MOCK_ARTISTS: Artist[] = [
  {
    id: 'artist-1',
    full_name: 'Burna Boy',
    avatar_url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25fc5fd4-dca2-4d4b-8538-64122c08a2f6/artist-1-273f3536-1776386033142.webp',
    bio: 'African Giant. Pioneer of the modern Afrobeats sound.'
  },
  {
    id: 'artist-2',
    full_name: 'Tems',
    avatar_url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25fc5fd4-dca2-4d4b-8538-64122c08a2f6/artist-2-dfbb498d-1776386034854.webp',
    bio: 'Soulful singer-songwriter from Lagos, Nigeria.'
  }
];

export const MOCK_ALBUMS: Album[] = [
  {
    id: 'album-1',
    title: 'Love, Damini',
    artist_id: 'artist-1',
    artist_name: 'Burna Boy',
    cover_url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25fc5fd4-dca2-4d4b-8538-64122c08a2f6/afrobeats-album-b6b08aa1-1776386032873.webp',
    release_date: '2022-07-08',
    genre: 'Afrobeats'
  },
  {
    id: 'album-2',
    title: 'Midnight Grooves',
    artist_id: 'artist-2',
    artist_name: 'Tems',
    cover_url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25fc5fd4-dca2-4d4b-8538-64122c08a2f6/amapiano-album-5cba3378-1776386034431.webp',
    release_date: '2023-11-15',
    genre: 'Amapiano'
  },
  {
    id: 'album-3',
    title: 'Neon Nights',
    artist_id: 'artist-1',
    artist_name: 'Burna Boy',
    cover_url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25fc5fd4-dca2-4d4b-8538-64122c08a2f6/hiphop-album-5f6cb991-1776386036704.webp',
    release_date: '2024-01-20',
    genre: 'Hip Hop'
  },
  {
    id: 'album-4',
    title: 'Blue Note Sessions',
    artist_id: 'artist-2',
    artist_name: 'Tems',
    cover_url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25fc5fd4-dca2-4d4b-8538-64122c08a2f6/jazz-album-dbb76f28-1776386032852.webp',
    release_date: '2023-05-12',
    genre: 'Jazz'
  }
];

export const MOCK_TRACKS: Track[] = [
  {
    id: 'track-1',
    title: 'Last Last',
    artist_id: 'artist-1',
    album_id: 'album-1',
    duration: 172,
    file_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    track_number: 1,
    artist_name: 'Burna Boy',
    album_title: 'Love, Damini',
    cover_url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25fc5fd4-dca2-4d4b-8538-64122c08a2f6/afrobeats-album-b6b08aa1-1776386032873.webp'
  },
  {
    id: 'track-2',
    title: 'Kilometre',
    artist_id: 'artist-1',
    album_id: 'album-1',
    duration: 153,
    file_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    track_number: 2,
    artist_name: 'Burna Boy',
    album_title: 'Love, Damini',
    cover_url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25fc5fd4-dca2-4d4b-8538-64122c08a2f6/afrobeats-album-b6b08aa1-1776386032873.webp'
  },
  {
    id: 'track-3',
    title: 'Higher',
    artist_id: 'artist-2',
    album_id: 'album-2',
    duration: 189,
    file_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    track_number: 1,
    artist_name: 'Tems',
    album_title: 'Midnight Grooves',
    cover_url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25fc5fd4-dca2-4d4b-8538-64122c08a2f6/amapiano-album-5cba3378-1776386034431.webp'
  },
  {
    id: 'track-4',
    title: 'Free Mind',
    artist_id: 'artist-2',
    album_id: 'album-2',
    duration: 215,
    file_url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    track_number: 2,
    artist_name: 'Tems',
    album_title: 'Midnight Grooves',
    cover_url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/25fc5fd4-dca2-4d4b-8538-64122c08a2f6/amapiano-album-5cba3378-1776386034431.webp'
  }
];