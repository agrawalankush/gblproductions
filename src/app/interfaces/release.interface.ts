export interface Release {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  releaseDate: string;
  description: string;
  links: {
    spotify?: string;
    appleMusic?: string;
    youtubeMusic?: string;
  };
  lyrics?: string;
  behindTheScenes?: {
    description?: string;
    images?: string[];
  };
  featured?: boolean;
}
