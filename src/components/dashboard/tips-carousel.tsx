import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const tips = [
  {
    text: "Carry your own water bottle to reduce plastic waste.",
    image: "https://images.unsplash.com/photo-1604470436341-3d59e35824e0?q=80&w=800",
    hint: "water bottle",
  },
  {
    text: "Say no to plastic straws and use reusable alternatives.",
    image: "https://images.unsplash.com/photo-1559827432-1d4b400a9d8a?q=80&w=800",
    hint: "reusable straw",
  },
  {
    text: "Bring your own shopping bags to the store.",
    image: "https://images.unsplash.com/photo-1542038784-56e981e65e22?q=80&w=800",
    hint: "shopping bag",
  },
  {
    text: "Pack a lunch in reusable containers instead of disposable ones.",
    image: "https://images.unsplash.com/photo-1588144739485-045a05b1b455?q=80&w=800",
    hint: "reusable container",
  },
];

export function TipsCarousel() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Let's make today a plastic-free day!</h2>
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {tips.map((tip, index) => (
            <CarouselItem key={index}>
              <Card className="rounded-2xl overflow-hidden shadow-none border-none">
                <CardContent className="relative h-32 p-4 flex items-end text-white">
                  <Image
                    src={tip.image}
                    alt={tip.text}
                    fill
                    className="object-cover"
                    data-ai-hint={tip.hint}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <p className="relative z-10 font-semibold">{tip.text}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
