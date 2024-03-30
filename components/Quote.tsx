interface QuoteProps {
  children: React.ReactNode;
}

export const Quote: React.FC<QuoteProps> = ({ children }) => {
  return (
    <blockquote className="border-l-4 bg-gray-50 px-4 py-3 text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:font-light dark:text-gray-400">
      {children}
    </blockquote>
  );
};
