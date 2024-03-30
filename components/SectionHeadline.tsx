interface SectionHeadlineProps {
  children: string;
  id?: string;
}

export const SectionHeadline: React.FC<SectionHeadlineProps> = ({
  children,
  id,
}) => {
  return (
    <h2 className="font-semibold text-gray-800 dark:text-gray-100" id={id}>
      {children}
    </h2>
  );
};
