import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  topLayerDivStyles: {
    width: "100%",
    height: "500px",
    backgroundColor: "#000",
    textAlign: "center",
  },
  topLayerImgStyles: {
    cursor: "pointer",
    border: "2px solid #fff",
    margin: "5px",
    filter: "drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.8))",
    width: "100px",
  },
  bottomLayerDivStyles: {
    width: "100%",
    height: "500px",
    position: "absolute",
    textAlign: "center",
  },
  bottomLayerShallowImgStyles: {
    filter: "grayscale(70%) brightness(0.75)",
    width: "100px",
    padding: "10px",
  },
  bottomLayerDeepImgStyles: {
    filter: "grayscale(100%) brightness(0.25)",
    width: "100px",
    padding: "10px",
  },
});
