import Image from "next/image";
import React from "react";

interface HomeGridTeaserProps {
  title: string;
  img: string;
}

const HomeGridTeaser = ({ title, img }: HomeGridTeaserProps) => {
  const backgroundImage = {
    backgroundImage: `url('${img}')`,
  };

  return (
    <div>
      <Image src={img} alt="" width="500" height="500" />
    </div>
  );
};

export default HomeGridTeaser;
