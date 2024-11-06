export default function HeroImage({ src, alt, differantClasses }) {
  return (
    <div className={`h-64 w-44 overflow-hidden rounded-lg ${differantClasses}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}
