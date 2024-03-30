interface SectionProps {
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children }) => (
  <section className="mt-12 space-y-6">{children}</section>
);
