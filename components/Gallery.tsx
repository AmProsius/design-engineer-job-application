import Image, { StaticImageData } from "next/image";
import bionicleFire from "../public/img/bionicle_fire.jpg";
import bionicleIce from "../public/img/bionicle_ice.jpg";
import bionicleJungle from "../public/img/bionicle_jungle.jpg";

interface GalleryImage {
  alt: string;
  src: StaticImageData;
}

export const Gallery: React.FC = () => {
  const images: GalleryImage[] = [
    { alt: "Custom Lego figure on a volcano", src: bionicleFire },
    { alt: "Custom Lego figure on a snowy bridge", src: bionicleIce },
    { alt: "Custom Lego figure at a river", src: bionicleJungle },
  ];

  return (
    <div className="flex flex-col gap-y-4 sm:grid sm:grid-cols-3 sm:gap-6">
      {images.map((image) => (
        <Image
          alt={image.alt}
          key={image.alt}
          src={image.src}
          className="aspect-[4/3] rounded-lg object-cover grayscale transition-all hover:grayscale-0"
        />
      ))}
    </div>
  );
};
