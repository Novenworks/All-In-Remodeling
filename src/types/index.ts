export interface ProjectItem {
  id: string;
  title: string;
  category: 'kitchens' | 'bathrooms' | 'outdoor' | 'whole-home';
  image: string;
  location: string;
  highlights: string[];
  description: string;
  duration: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  location: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  beforeNote: string;
  afterNote: string;
  scope: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  projectType: string;
  rating: number;
  date: string;
  quote: string;
  highlight: string;
}
