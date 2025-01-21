import { Box, Button } from "@mui/material";
import MultiButtonProps from "./types";

export const MultiButton = (props: MultiButtonProps) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={1}>
      {props.buttons.map((button, index) => (
        <Button
          onClick={() => console.log(`Button ${button} clicked`)}
          key={index}
          variant="contained"
          sx={{
            backgroundColor: "#0032a0",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {button}
        </Button>
      ))}
    </Box>
  );
};
