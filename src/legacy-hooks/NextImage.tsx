import Image, { ImageProps } from "next/image";
import React, { FC, useState } from "react";

interface IProps extends ImageProps {
  src: string;
  alt: string;
}

const NextImage: FC<IProps> = ({ src, alt, ...rest }) => {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const handleLoad = ({ target }: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = target as HTMLImageElement;
    setDimensions({ width: naturalWidth, height: naturalHeight });
  };

  // Prevent rendering until image is loaded and dimensions are known
  return (
    <>
      {dimensions ? (
        <Image
          src={src}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          unoptimized
          onLoad={handleLoad}
          {...rest}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          style={{ visibility: "hidden", position: "absolute", top: 0 }}
        />
      )}
    </>
  );
};

export default NextImage;
