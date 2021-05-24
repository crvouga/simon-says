import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { Game } from "./Game";
import { LoadingBackdrop } from "./LoadingBackdrop";

const useStyles = makeStyles((theme) => ({
  buttons: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(0, 1),
  },
}));

export const App = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box paddingY={4}>
        <Container maxWidth="xs">
          <Game />
        </Container>
      </Box>

      <LoadingBackdrop />

      <div className={classes.footer}></div>
    </React.Fragment>
  );
};
