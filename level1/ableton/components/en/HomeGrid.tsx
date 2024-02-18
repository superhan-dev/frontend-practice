import React from "react";
import HomeGridTeaser from "./HomeGridTeaser";

// 	https://ableton-production.imgix.net/uploads/homep…to=format&fit=crop&fm=jpg&h=622&ixjsv=1.1.3&w=933
// 	https://ableton-production.imgix.net/uploads/homep…to=format&fit=crop&fm=jpg&h=356&ixjsv=1.1.3&w=533
// https://ableton-production.imgix.net/uploads/homep…to=format&fit=crop&fm=jpg&h=356&ixjsv=1.1.3&w=533
const HomeGrid = () => {
  return (
    <div className="relative w-full h-full bg-red-50">
      <div className="absolute top-0 left-0">
        <HomeGridTeaser
          title="Save 20% on Live 11 now, upgrade to Live 12 for free"
          img="/img/en_teaser_3.png"
        />
      </div>
      <div className="absolute top-500 left-500">
        <HomeGridTeaser title="" img="/img/en_teaser_2.png" />
      </div>
      <div className="absolute top-300 left-700">
        <HomeGridTeaser title="" img="/img/en_teaser_1.png" />
      </div>
    </div>
  );
};

export default HomeGrid;
