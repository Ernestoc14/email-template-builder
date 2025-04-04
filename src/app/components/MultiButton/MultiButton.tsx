import { Box, Button } from "@mui/material";
import MultiButtonProps from "./types";

export const MultiButton = (props: MultiButtonProps) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={1}>
      {props.buttons.map((button, index) => (
        <Button
          onClick={() => props.onClick(button)}
          key={index}
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#0032a0",
            color: "white",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          {button}
        </Button>
      ))}
    </Box>
  );
};
