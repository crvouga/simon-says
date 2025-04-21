import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { constants } from "../simon-says";
import { GameButton } from "./GameButton";
import { GameControls } from "./GameControls";

const { NOTES } = constants;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
}));

export const Game = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={2}>
      {NOTES.map((note) => (
        <Grid key={note} item xs={6}>
          <GameButton note={note} />
        </Grid>
      ))}
      <GameControls />
    </Grid>
  );
};
