export interface Platform {
    name: string;
    icon: React.ReactNode;
    description: string;
  }
  
  export interface PlatformDetails {
    howToShare: string;
    community: string;
    link: string;
  }
  
  export interface VoteState {
    [name: string]: number;
  }
  
  export interface UpvotedState {
    [name: string]: boolean;
  }
  
  export interface ExpandedState {
    [name: string]: boolean;
  }