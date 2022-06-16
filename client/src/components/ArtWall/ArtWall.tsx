import React from "react";
import { slides } from "../../data.js";
import { SlideData } from "../../interfaces";
import PostsLayer from "./PostsLayer/PostsLayer";

import { useStyles } from "./ArtWall.styles";

const ArtWall = () => {
  const [bottomLayers, setBottomLayers] = React.useState<SlideData[] | null>(
    null
  );
  const [topLayer, setTopLayer] = React.useState<SlideData[] | null>(null);

  React.useEffect(() => {
    setTopLayer(slides.slice(0, 7));
    setBottomLayers(slides.slice(7, 20));
  }, []);

  const classes = useStyles();
  return (
    <div>
      {/* Bottom post layer: Deep */}
      <PostsLayer
        imgClass={classes.bottomLayerDeepImgStyles}
        divClass={classes.bottomLayerDivStyles}
        rotationMultiplier={25}
        posts={bottomLayers}
        startAndEnd={[7, 20]}
      />
      {/* Bottom post layer: Shallow */}
      <PostsLayer
        imgClass={classes.bottomLayerShallowImgStyles}
        divClass={classes.bottomLayerDivStyles}
        rotationMultiplier={25}
        posts={bottomLayers}
        startAndEnd={[0, 7]}
      />
      {/* Top post layer */}
      <PostsLayer
        imgClass={classes.topLayerImgStyles}
        divClass={classes.topLayerDivStyles}
        rotationMultiplier={8}
        posts={topLayer}
        startAndEnd={[0, 7]}
      />
    </div>
  );
};

export default ArtWall;
