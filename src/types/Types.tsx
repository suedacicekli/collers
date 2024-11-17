export interface BestProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onBuyNow: () => void;
}

export interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}
