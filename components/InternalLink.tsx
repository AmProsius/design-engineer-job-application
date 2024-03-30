import { LinkIcon } from "@heroicons/react/16/solid";

interface InternalLinkProps {
  anchor: string;
  children: string;
}

export const InternalLink: React.FC<InternalLinkProps> = ({
  anchor,
  children,
}) => {
  return (
    <a
      href={`#${anchor}`}
      className="inline-flex items-center gap-x-0.5 font-semibold text-gray-800 transition-colors hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-100"
    >
      {children}
      <LinkIcon className="size-4" aria-hidden="true" />
    </a>
  );
};
