import data from '@/data/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  title?: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const placeholderImages: ImagePlaceholder[] = data.placeholderImages;
