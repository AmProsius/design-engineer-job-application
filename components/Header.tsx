import Image from "next/image";

import photo from "@/public/img/fabian-bastwoeste.jpg";

export const Header: React.FC = () => {
  return (
    <header className="lg:sticky lg:top-8">
      <div className="relative mx-auto w-full max-w-prose max-lg:flex max-lg:justify-center">
        <Image
          src={photo}
          alt="Handsome young man with white hair, a hipster bun and black glasses"
          className="size-40 rounded-full border-4 border-white shadow-lg lg:absolute lg:-end-4 lg:translate-x-full dark:border-gray-600"
        />
      </div>
    </header>
  );
};
