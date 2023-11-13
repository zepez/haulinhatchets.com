interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Section = ({ children, style, className }: Props) => {
  return (
    <section style={{ ...style }} className={className}>
      <div className="container max-w-4xl mx-auto">{children}</div>
    </section>
  );
};
