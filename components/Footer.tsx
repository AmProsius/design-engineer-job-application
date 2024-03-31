import Image from "next/image";

import githubLogo from "../public/img/github-mark.svg";
import githubLogoWhite from "../public/img/github-mark-white.svg";

export const Footer: React.FC = () => (
  <footer className="mx-auto mt-8 flex w-full max-w-prose border-t dark:border-gray-700">
    <div className="group relative mt-6 flex items-center gap-x-2">
      <Image
        src={githubLogo}
        alt="GitHub logo"
        className="size-5 opacity-60 transition-opacity group-hover:opacity-80 dark:hidden"
      />
      <Image
        src={githubLogoWhite}
        alt="GitHub logo"
        className="hidden size-5 opacity-60 transition-opacity group-hover:opacity-80 dark:block"
      />
      <a
        className="text-gray-500 transition-colors after:absolute after:inset-0 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
        href="https://github.com/AmProsius/design-engineer-job-application"
        target="_blank"
      >
        GitHub
      </a>
    </div>
  </footer>
);
