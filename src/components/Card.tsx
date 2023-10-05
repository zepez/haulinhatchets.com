interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
  image: {
    alt?: string;
    className?: string;
    height?: string;
    src: string;
  };
}

export const Card = ({ children, title, image, className = "" }: Props) => {
  const {
    className: imageClassName = "",
    alt: imageAlt,
    src: imageSrc,
    height: imageHeight = "h-64",
  } = image;

  return (
    <div className={"bg-slate-100 rounded-lg pt-4 text-center " + className}>
      <h3 className="text-4xl sm:text-[2.3rem] font-semibold mb-1 px-2">
        {title}
      </h3>
      <p className="text-lg px-2">{children}</p>
      <div className="mt-2">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`rounded-b-lg object-cover w-full ${imageHeight} ${imageClassName}`}
        />
      </div>
    </div>
  );
};
