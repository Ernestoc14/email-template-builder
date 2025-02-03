import { Box, Popover, Typography } from "@mui/material";
import { PreviewComponentProps } from "./types";

const PreviewComponent: React.FC<PreviewComponentProps> = ({
  open,
  onClose,
  component,
  variant,
  anchorEl,
  previewHTML,
}) => {
  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      sx= {{
          padding: 2, 
          borderRadius: 2,
          width: "100%",
          height: "100%",
        }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 1,
          boxShadow: 24,
          padding: 2,
          // Width del preview component
          width: "100%",
          height: "100%",
        }}
      >
        <Typography variant="h6" component="h1">
          Variante {variant} de {component}
        </Typography>
        <Box
          sx={{
            cursor: "pointer",
            padding: 1, 
            "&:hover": { backgroundColor: "#a5a5a5"}
          }}
        >
          <div style={{width: "500px"}} dangerouslySetInnerHTML={{ __html: previewHTML }} />
        </Box>
      </Box>
    </Popover>
  );
};

export default PreviewComponent;
