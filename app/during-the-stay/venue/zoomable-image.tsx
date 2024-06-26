"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type ZoomableImageProps = {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
};

export const ZoomableImage = ({
  src,
  alt,
  width,
  height,
}: ZoomableImageProps) => {
  const [isZoomEnabled, setIsZoomEnabled] = useState(true);

  const toggleZoom = () => {
    setIsZoomEnabled((prev) => !prev);
  };

  return (
    <div className="w-full">
      <Zoom>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg cursor-pointer"
          layout="responsive"
        />
      </Zoom>
    </div>
  );
};
