interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Section = ({ children, style, className }: Props) => {
  return (
    <section style={{ ...style }} className={className}>
      <div className="container max-w-md sm:max-w-6xl mx-auto">{children}</div>
    </section>
  );
};
