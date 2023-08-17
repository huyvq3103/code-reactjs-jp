import React, { useState, ChangeEvent } from "react";
import { Grid, Box, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    textAlign: "center",
  },
  imgBox: {
    maxWidth: "80%",
    maxHeight: "80%",
    margin: "10px",
  },
  img: {
    height: "inherit",
    maxWidth: "inherit",
  },
  input: {
    display: "none",
  },
}));

const Camera: React.FC = () => {
  const classes = useStyles();
  const [source, setSource] = useState<string>("");

  const handleCapture = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      if (event.target.files.length !== 0) {
        const file = event.target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          {/* <h5>Capture your image</h5>
          {source && (
            <Box
              display="flex"
              justifyContent="center"
              border={1}
              className={classes.imgBox}
            >
              <img src={source} alt={"snap"} className={classes.img}></img>
            </Box>
          )} */}
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
            capture="environment"
            onChange={handleCapture}
          />

          <label htmlFor="icon-button-file">
            <IconButton aria-label="upload picture" component="span">
              <PhotoCameraRoundedIcon fontSize="large" color="primary" />
            </IconButton>
          </label>
          <div>Camera</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Camera;
