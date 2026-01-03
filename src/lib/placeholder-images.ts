export type ImagePlaceholder = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const placeholderImages: ImagePlaceholder[] = [
  {
    id: "challenge-bottle",
    title: "Carry your own water bottle",
    description: "Avoid buying single-use plastic bottles today",
    imageUrl: "/challenge-1.jpg",
    imageHint: "water bottle"
  },
  {
    id: "challenge-straws", 
    title: "Say no to plastic straws",
    description: "Use a metal, bamboo, or paper straw instead",
    imageUrl: "/challenge-2.jpg",
    imageHint: "reusable straw"
  },
  {
    id: "challenge-bag",
    title: "Bring your own shopping bag",
    description: "Refuse plastic bag when shopping",
    imageUrl: "/challenge-3.jpg",
    imageHint: "shopping bag"
  },
  {
    id: "challenge-lunchbox",
    title: "Pack a lunch in reusable containers",
    description: "Avoid plastic wraps or takeaway boxes",
    imageUrl: "/challenge-4.jpg",
    imageHint: "reusable container"
  },
  {
    id: "challenge-cutlery",
    title: "Avoid plastic cutlery",
    description: "Try using metal or wooden cutlery instead",
    imageUrl: "/challenge-5.jpeg",
    imageHint: "reusable container"
  }
];