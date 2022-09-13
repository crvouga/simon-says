import { Box, Container } from "@material-ui/core";
import React from "react";
import { Game } from "./Game";
import { LoadingBackdrop } from "./LoadingBackdrop";

export const App = () => {
  return (
    <React.Fragment>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        maxWidth={360}
        margin="auto"
      >
        <Game />
      </Box>

      <LoadingBackdrop />
    </React.Fragment>
  );
};
