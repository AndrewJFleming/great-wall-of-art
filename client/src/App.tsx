import React from "react";
import { slides } from "./data.js";
import { SlideData } from "./interfaces";

function App() {
  const [bottomLayers, setBottomLayers] = React.useState<SlideData[] | null>(
    null
  );
  const [topLayer, setTopLayer] = React.useState<SlideData[] | null>(null);

  React.useEffect(() => {
    setTopLayer(slides.slice(0, 7));
    setBottomLayers(slides.slice(7, 20));
  }, [slides]);

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "500px",
          position: "absolute",
          textAlign: "center",
        }}
      >
        {bottomLayers?.map(
          (bottomLayerSlide: SlideData, index: number) =>
            index >= 7 && (
              <img
                style={{
                  filter: "grayscale(100%) brightness(0.25)",
                  width: "100px",
                  padding: `${Math.floor(Math.random() * 10)}px ${Math.floor(
                    Math.random() * 10
                  )}px`,
                  transform: `rotate(${Math.floor(Math.random() * 25)}deg)`,
                }}
                src={bottomLayerSlide.imageUrl}
                alt={bottomLayerSlide.title}
                key={bottomLayerSlide.id}
              />
            )
        )}
      </div>
      <div
        style={{
          width: "100%",
          height: "500px",
          position: "absolute",
          textAlign: "center",
        }}
      >
        {bottomLayers?.map(
          (bottomLayerSlide, index) =>
            index < 7 && (
              <img
                style={{
                  filter: "grayscale(70%) brightness(0.75)",
                  width: "100px",
                  padding: `${Math.floor(Math.random() * 10)}px ${Math.floor(
                    Math.random() * 10
                  )}px`,
                  transform: `rotate(${Math.floor(Math.random() * 25)}deg)`,
                }}
                src={bottomLayerSlide.imageUrl}
                alt={bottomLayerSlide.title}
                key={bottomLayerSlide.id}
              />
            )
        )}
      </div>
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "#000",
          textAlign: "center",
        }}
      >
        {topLayer?.map(
          (topLayerSlide, index) =>
            index < 20 && (
              <img
                style={{
                  cursor: "pointer",
                  border: "2px solid #fff",
                  margin: "5px",
                  filter: "drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.8))",
                  width: "100px",
                  transform: `rotate(${Math.floor(Math.random() * 8)}deg)`,
                }}
                src={topLayerSlide.imageUrl}
                alt={topLayerSlide.title}
                key={topLayerSlide.id}
              />
            )
        )}
      </div>
    </div>
  );
}

export default App;
