import { Box, Button } from "@mui/material"
import MultiButtonProps from "./types"

export const MultiButton = (props: MultiButtonProps) => {
  const { buttons, onClick = [] } = props;
    return (
      <Box display="flex" flexWrap="wrap" gap={1}>
        {buttons.map((button, index) => (
          <Button 
            onClick={() => onClick?.(button)} 
            key={index} variant="contained" sx={{backgroundColor: "#0032a0", color: "white", fontWeight:"bold"}}>
            {button}
          </Button>
        ))}
      </Box>
    )
  }