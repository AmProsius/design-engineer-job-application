interface HeadlineProps {
  children: string;
}

export const Headline: React.FC<HeadlineProps> = ({ children }) => (
  <div className="flex">
    <h1 className="text-balance bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text font-roboto-slab text-2xl font-bold text-transparent">
      {children}
    </h1>
  </div>
);
