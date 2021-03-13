import { Box, Button, Container, makeStyles } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import React from "react";
import { Game } from "./Game";
import { LoadingBackdrop } from "./LoadingBackdrop";
import LinkIcon from "@material-ui/icons/Link";
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

const PERSONAL_URL = `https://chrisvouga.dev/`;

const AttributionButton = () => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="outlined"
      href={PERSONAL_URL}
      startIcon={<LinkIcon />}
    >
      Chris Vouga
    </Button>
  );
};

const SOURCE_CODE_URL = "https://github.com/crvouga/simon-says";

const SourceCodeButton = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="outlined"
      href={SOURCE_CODE_URL}
      startIcon={<CodeIcon />}
    >
      Source Code
    </Button>
  );
};

export const App = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.buttons}>
        <AttributionButton />
        <SourceCodeButton />
      </div>

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
