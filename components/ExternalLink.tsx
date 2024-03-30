import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

interface ExternalLinkProps {
  children: string;
  href: string;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  children,
  href,
}) => (
  <a
    className="inline-flex items-center gap-x-0.5 font-semibold text-gray-800 underline decoration-sky-600 decoration-2 transition-colors hover:text-gray-900 hover:decoration-emerald-600 dark:text-gray-200 dark:hover:text-gray-100"
    href={href}
    target="_blank"
  >
    {children}
    <ArrowTopRightOnSquareIcon className="size-4 shrink-0" aria-hidden="true" />
  </a>
);
