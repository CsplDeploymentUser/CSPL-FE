import OrbitingCircles from "@/Components/ui/orbiting-circles";

type Props = { ImagesContent: string[] };

export default function TechnologiesOrbitingCircles({ ImagesContent }: Props) {
  const midpoint = Math.ceil(ImagesContent.length / 2);
  console.log(midpoint, "midpoint");
  const innerCircleImages = ImagesContent.slice(0, midpoint);
  const outerCircleImages = ImagesContent.slice(midpoint);

  return (
    <div className="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        <img
          src="/logo.png"
          alt="Center Logo"
          className="size-[100px] border-none bg-transparent object-contain"
        />
      </span>

      {innerCircleImages.map((image: any, index: number) => (
        <OrbitingCircles
          key={`inner-${index}`}
          className="size-[40px] border-none bg-transparent z-10"
          duration={20}
          delay={index * 5}
          radius={120}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${image?.image}`}
            alt={image?.image_alternate_text}
          />
        </OrbitingCircles>
      ))}

      {outerCircleImages.map((image: any, index: number) => (
        <OrbitingCircles
          key={`outer-${index}`}
          className="size-[60px] border-none bg-transparent z-10"
          radius={190}
          duration={20}
          delay={index * 5}
          reverse
        >
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${image?.image}`}
            alt={image?.image_alternate_text}
          />
        </OrbitingCircles>
      ))}
    </div>
  );
}
