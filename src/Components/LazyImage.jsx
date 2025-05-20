import { useState } from "react";

const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={`
        ${className}
        transition-all duration-700 ease-in-out
        ${loaded ? "" : "blur-md scale-105"}
      `}
    />
  );
};

export default LazyImage;
