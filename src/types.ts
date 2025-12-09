import React from 'react';

export interface Episode {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  views: string;
  category: 'Freestyle' | 'Interview' | 'Documentary';
  date: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}
