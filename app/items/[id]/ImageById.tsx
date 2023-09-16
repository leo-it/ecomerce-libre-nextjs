"use client";

import React, { FC } from "react";

import Image from "next/image";

interface Props {
  item: {
    title: string;
    thumbnail: string;
  };
}
export const ImageById: FC<Props> = ({ item }) => {
  //handler
  const handleLoader = ({ src, width }: { src: string; width: number }) => {
    return `${src}?w=${width}`;
  };
  return (
    <Image
      loader={handleLoader}
      width={500}
      height={500}
      src={item.thumbnail}
      alt={item.title}
    />
  );
};
